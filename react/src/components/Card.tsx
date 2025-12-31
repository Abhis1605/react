import type {PropsWithChildren, ReactNode} from 'react'

interface CardProps extends PropsWithChildren{
    title: string,
    footer?: ReactNode
}

export function Card({title, children, footer}: CardProps) {
  return (
    <div>
      <section> 
        <h2>{title}</h2>
        <div>{children}</div>
        {footer && <footer>{footer}</footer>}
      </section>
    </div>
  )
}

// in react children is special type which is we wrap this in react and can we used in layout