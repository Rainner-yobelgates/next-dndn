import Image from 'next/image'
import Link from 'next/link'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface Category {
  name: string
  slug: string
}

interface CategoryCardProps {
  category: Category
}

const CategoryCard: React.FC<CategoryCardProps> = async ({ category }) => {  
  return (
    <Link href={`/products?category=${category.slug}`}>
      <Card className='relative h-full w-full overflow-hidden rounded-lg bg-transparent transition-colors group hover:bg-primary'>
        <CardHeader>
          <Image
            src={`/svg/${category.slug}.svg`}
            alt='test'
            width={32}
            height={32}
          />
        </CardHeader>
        <CardContent className='space-y-1.5'>
          <CardTitle className='capitalize text-primary group-hover:text-primary-foreground'>
            {category.name}
          </CardTitle>
          {/* <CardDescription className='group-hover:text-white'>
            {products} Products
          </CardDescription> */}
        </CardContent>
      </Card>
    </Link>
  )
}

export default CategoryCard
