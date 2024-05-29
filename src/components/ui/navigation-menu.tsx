import * as React from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { cva } from 'class-variance-authority'
import { ChevronDown, ExternalLink } from 'lucide-react'

import { cn } from '@/lib/utils'
import { blogs } from '../../data'
import { Link } from 'react-router-dom'

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      'relative z-10 flex max-w-max flex-1 items-center justify-center',
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      'group flex flex-1 list-none items-center justify-center space-x-1',
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  'group inline-flex h-10 w-max items-center justify-center rounded-md bg-[#181a1b] px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), 'group', className)}
    {...props}
  >
    {children}{' '}
    <ChevronDown
      className='relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180'
      aria-hidden='true'
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto',
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn('absolute left-0 top-full flex justify-center')}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
      className
    )}
    {...props}
  >
    <div className='relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md' />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, href = '/', ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <span
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className='text-sm font-medium leading-none'>{title}</div>
            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
              {children}
            </p>
          </span>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})

export const Navbar = () => {
  return (
    <NavigationMenu className='relative z-[1] flex w-screen justify-center'>
      <NavigationMenuList className='center shadow-blackA4 text-[#7360BF] m-0 flex list-none rounded-[6px] bg-[#181a1b] p-1 shadow-[0_2px_10px]'>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]'>
            Getting started
          </NavigationMenuTrigger>
          <NavigationMenuContent className='bg-[#181a1b] text-white rounded-lg data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto'>
            <ul className='p-6 md:w-[400px] lg:w-[500px]'>
              {blogs.slice(3).map((blog) => (
                <ListItem
                  key={blog.title}
                  title={blog.title}
                  href={`/${blog.id}`}
                >
                  {blog.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className='text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]'>
            Components
          </NavigationMenuTrigger>
          <NavigationMenuContent className='bg-[#181a1b] text-white rounded-lg  absolute top-0 left-0 w-full sm:w-auto'>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
              {blogs.map((blog) => (
                <ListItem
                  key={blog.title}
                  title={blog.title}
                  href={`/${blog.id}`}
                >
                  {blog.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <a href='/docs'>
            <NavigationMenuLink
              className={`text-violet11 hover:bg-violet3 focus:shadow-violet7 select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px] flex align-center gap-0.5 ${navigationMenuTriggerStyle()}`}
              href='https://github.com/radix-ui'
            >
              Documentation <ExternalLink size={16} />
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
