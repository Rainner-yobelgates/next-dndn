import { useDebouncedValue } from '@mantine/hooks'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState, useTransition } from 'react'

import searchProducts from '@/actions/search-products'
import { Button } from '@/components/ui/button'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { SearchProducts } from '@/types/search-products'
import Image from 'next/image'
import { Product } from '@/types/product'

const SearchButton = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [query, setQuery] = useState<string>('')
  const [debounced] = useDebouncedValue(query, 300)
  const [data, setData] = useState<SearchProducts | null>(null)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (debounced.length <= 0) {
      setData(null)
      return
    }

    const fetchProducts = async () => {
      const response = await searchProducts(debounced)
      setData(response)
    }

    startTransition(fetchProducts)

    return () => setData(null)
  }, [debounced])

  useEffect(() => {
    if (!open) {
      setQuery('')
    }
  }, [open])

  const handleSelect = useCallback((callback: () => unknown) => {
    setOpen(false)
    callback()
  }, [])


  const renderSearch = () => {
    return isPending ? (
      <div className='space-y-1 overflow-hidden px-1 py-2'>
        <Skeleton className='h-4 w-10 rounded' />
        <Skeleton className='h-8 rounded-sm' />
        <Skeleton className='h-8 rounded-sm' />
      </div>
    ) : (
      data && (
        <>
          <CommandGroup
            heading='Daftar Produk'
            className='capitalize'
          >
            {data.products?.map((product: Product, index) => (
              <CommandItem
                key={index}
                value={product.name}
                onSelect={() =>
                  handleSelect(() =>
                    router.push(
                      `/product/${product.slug}`,
                    ),
                  )
                }

                onClick={() =>
                  handleSelect(() =>
                    router.push(
                      `/product/${product.slug}`,
                    ),
                  )
                }
              >
                <div className="relative lg:w-32 lg:h-32 w-16 h-16 mr-4">
                  <Image
                    src={`https://api.al-miffa.or.id/storage/${product.images![0].path}`}
                    alt={product.name + ' Image'}
                    layout="fill"
                    objectFit="cover"
                    className="rounded" // Optional: add rounded corners or other styling
                  />
                </div>
                <span className='truncate'>{product.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup
            heading='Daftar Koleksi Pria'
            className='capitalize'
          >
            {data.man_collections?.map((product, index) => (
              <CommandItem
                key={index}
                value={product.name + ' Pria'}
                onSelect={() =>
                  handleSelect(() =>
                    router.push(
                      `/collections/woman-collections?category=${product.slug}`,
                    ),
                  )
                }
                onClick={() =>
                  handleSelect(() =>
                    router.push(
                      `/collections/woman-collections?category=${product.slug}`,
                    ),
                  )
                }
              >
                <span className='truncate'>{product.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup
            heading='Daftar Koleksi Wanita'
            className='capitalize'
          >
            {data.woman_collections?.map((product, index) => (
              <CommandItem
                key={index}
                value={product.name + ' Wanita'}
                onSelect={() =>
                  handleSelect(() =>
                    router.push(
                      `/collections/woman-collections?category=${product.slug}`,
                    ),
                  )
                }
                onClick={() =>
                  handleSelect(() =>
                    router.push(
                      `/collections/woman-collections?category=${product.slug}`,
                    ),
                  )
                }
              >
                <span className='truncate'>{product.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </>
      )
    )
  }

  return (
    <>
      {/* <Button
        onClick={() => setOpen((open) => !open)}
        variant='outline'
        className='relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2'
      >
        <Search className='h-4 w-4 xl:mr-2' aria-hidden='true' />
        <span className='hidden xl:inline-flex'>Cari Produk...</span>
        <span className='sr-only'>Cari Produk</span>
        <kbd className='pointer-events-none absolute right-2 top-2 hidden h-6 select-none items-center gap-1 rounded-full border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 xl:flex'>
          <abbr title='Control' className='no-underline'>
            Ctrl
          </abbr>
          K
        </kbd>
      </Button> */}
      <Button
        onClick={() => setOpen((open) => !open)}
        variant='outline'
        className='relative h-9 w-9 p-0'
      >
        <Search className='h-4 w-4 xl:mr-2' aria-hidden='true' />        
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          value={query}
          onValueChange={setQuery}
          placeholder='Cari produk...'
        />
        <CommandList >
          <CommandEmpty
            className={cn(isPending ? 'hidden' : 'py-6 text-center text-sm')}
          >
            Tidak ada produk yang ditemukan
          </CommandEmpty>
          {renderSearch()}          
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default SearchButton
