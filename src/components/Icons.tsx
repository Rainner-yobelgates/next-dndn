import { cn } from '@/lib/utils'
import { LucideProps, User } from 'lucide-react'
import { Yeseva_One } from 'next/font/google'

const yasevaOne = Yeseva_One({
  weight: "400",
  subsets: ["latin"],
})

export const Icons = {
  user: User,
  logo: (props: LucideProps) => (
    <div className={cn(
      "text-2xl font-bold text-primary",
      yasevaOne.className,
      "text-[#302e2e]",
      "flex items-center"
    )}>
      <span>DNDN</span>
    </div>
  ),
  gitHub: (props: LucideProps) => (
    <svg viewBox='0 0 438.549 438.549' {...props}>
      <path
        fill='currentColor'
        d='M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z'></path>
    </svg>
  ),
  google: (props: LucideProps) => (
    <svg {...props} viewBox='0 0 24 24'>
      <path
        d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
        fill='#4285F4'
      />
      <path
        d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
        fill='#34A853'
      />
      <path
        d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
        fill='#FBBC05'
      />
      <path
        d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
        fill='#EA4335'
      />
      <path d='M1 1h22v22H1z' fill='none' />
    </svg>
  ),
  whatsapp: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      style={{
        // fill: "#000",
        // fill: "rgba(20 14.3% 4.1%)",
        fill: "currentColor",
      }}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
        clipRule="evenodd"
      />
    </svg>
  ),
  instagram: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{
        // fill: "#000",
        // fill: "rgba(20 14.3% 4.1%)",
        fill: "currentColor",
      }}
      {...props}
    >
      <path d="M11.999 7.377a4.623 4.623 0 100 9.248 4.623 4.623 0 000-9.248zm0 7.627a3.004 3.004 0 110-6.008 3.004 3.004 0 010 6.008z"></path>
      <circle cx="16.806" cy="7.207" r="1.078"></circle>
      <path d="M20.533 6.111A4.605 4.605 0 0017.9 3.479a6.606 6.606 0 00-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 00-2.184.42 4.6 4.6 0 00-2.633 2.632 6.585 6.585 0 00-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 002.634 2.632 6.584 6.584 0 002.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 002.186-.419 4.613 4.613 0 002.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 00-.421-2.217zm-1.218 9.532a5.043 5.043 0 01-.311 1.688 2.987 2.987 0 01-1.712 1.711 4.985 4.985 0 01-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 01-1.669-.311 2.985 2.985 0 01-1.719-1.711 5.08 5.08 0 01-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 01.311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 011.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 011.67.311 2.991 2.991 0 011.712 1.712 5.08 5.08 0 01.311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
    </svg>
  ),
  emptyCart: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="170"
      height="155"
      fill="none"
      viewBox="0 0 170 155"
      {...props}
    >
      <g clipPath="url(#clip0_2028_3)">
        <path
          fill="#F2F2F2"
          d="M105.66 61.17c-8.37 0-16.89-.34-24.86-2.56-7.82-2.17-15-6.38-21.4-11.25-4.19-3.17-8-5.7-13.44-5.32a24.91 24.91 0 00-14.52 5.67c-6.92 6.06-5.88 17.29-3.11 25.15C32.49 84.73 45.15 93 55.91 98.35c12.43 6.21 26.09 9.82 39.78 11.89 12 1.83 27.42 3.15 37.82-4.68 9.55-7.21 12.17-23.65 9.83-34.75a13.652 13.652 0 00-4.91-8.32c-6.71-4.91-16.72-1.63-24.26-1.47-2.8.06-5.65.13-8.51.15zM85.58 129.7c20.274 0 36.71-1.025 36.71-2.29 0-1.265-16.436-2.29-36.71-2.29s-36.71 1.025-36.71 2.29c0 1.265 16.436 2.29 36.71 2.29z"
        ></path>
        <path
          stroke="#BABABA"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M33.78 39.12l13-1.1a7.1 7.1 0 017.41 5l12.46 41.7-2.44 4.37A7.12 7.12 0 0071 99.65l49.9-4.24"
        ></path>
        <path
          fill="#fff"
          stroke="#BABABA"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M56.05 49.35l58-4.92a3.818 3.818 0 014.11 4.33l-3.93 28.37a3.83 3.83 0 01-3.42 3.28l-44.16 4.31-10.6-35.37zM76.55 109.21a4.71 4.71 0 100-9.42 4.71 4.71 0 000 9.42zM109.35 106.43a4.71 4.71 0 100-9.42 4.71 4.71 0 000 9.42z"
        ></path>
        <path
          fill="#D2D2D2"
          d="M44.075 36.894l-12.256 1.04a1.93 1.93 0 10.326 3.846L44.4 40.74a1.93 1.93 0 00-.326-3.846z"
        ></path>
        <path
          stroke="#BABABA"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M80.47 71.26a8.07 8.07 0 0115.71-1.34"
        ></path>
        <path
          fill="#BABABA"
          d="M96.31 60.47a1.12 1.12 0 100-2.24 1.12 1.12 0 000 2.24zM78.56 61.97a1.12 1.12 0 100-2.24 1.12 1.12 0 000 2.24z"
        ></path>
        <path
          stroke="#BABABA"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M47.01 103.11v4.31M44.86 105.26h4.3M115.72 22.99v4.3M113.57 25.14h4.3M64.81 35.84v4.3M62.65 37.99h4.31"
        ></path>
        <path
          fill="#fff"
          stroke="#BABABA"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M126.45 51.65a1.02 1.02 0 100-2.04 1.02 1.02 0 000 2.04z"
        ></path>
        <path
          fill="#CFCFCF"
          d="M88.33 42.48a.98.98 0 100-1.96.98.98 0 000 1.96zM94.91 113.6a.98.98 0 100-1.96.98.98 0 000 1.96z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2028_3">
          <path fill="#fff" d="M0 0H170V155H0z"></path>
        </clipPath>
      </defs>
    </svg>
  )
}
