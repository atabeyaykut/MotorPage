import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const CarouselContext = React.createContext(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }
  return context
}

const Carousel = React.forwardRef(({ 
  orientation = "horizontal", 
  opts, 
  setApi, 
  plugins, 
  className, 
  children,
  ...props 
}, ref) => {
  const [carouselRef, api] = useEmblaCarousel({
    ...opts,
    axis: orientation === "horizontal" ? "x" : "y",
    loop: true
  }, plugins)

  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback((event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      scrollPrev()
    } else if (event.key === "ArrowRight") {
      event.preventDefault()
      scrollNext()
    }
  }, [scrollPrev, scrollNext])

  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) return

    onSelect(api)
    api.on("select", onSelect)
    api.on("reInit", onSelect)

    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api, onSelect])

  return (
    <CarouselContext.Provider value={{ 
      carouselRef, 
      api, 
      opts, 
      orientation, 
      scrollPrev, 
      scrollNext, 
      canScrollPrev, 
      canScrollNext 
    }}>
      <div 
        ref={ref} 
        onKeyDownCapture={handleKeyDown} 
        className={cn("relative", className)} 
        role="region" 
        aria-roledescription="carousel" 
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
})

Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div 
        ref={ref} 
        className={cn(
          "flex", 
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", 
          className
        )} 
        {...props} 
      />
    </div>
  )
})

CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div 
      ref={ref} 
      role="group" 
      aria-roledescription="slide" 
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )} 
      {...props} 
    />
  )
})

CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef(({ 
  className, 
  variant = "outline", 
  size = "icon", 
  ...props 
}, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <button 
      ref={ref} 
      variant={variant} 
      size={size} 
      className={cn(
        "absolute flex items-center justify-center h-8 w-8 rounded-full",
        orientation === "horizontal" 
          ? "-left-12 top-1/2 -translate-y-1/2" 
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )} 
      disabled={!canScrollPrev} 
      onClick={scrollPrev}
      aria-label="Önceki slayt"
      {...props}
    >
      <ChevronLeft className="h-4 w-4" aria-hidden="true" />
      <span className="sr-only">Önceki slayt</span>
    </button>
  )
})

CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef(({ 
  className, 
  variant = "outline", 
  size = "icon", 
  ...props 
}, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <button 
      ref={ref} 
      variant={variant} 
      size={size} 
      className={cn(
        "absolute flex items-center justify-center h-8 w-8 rounded-full",
        orientation === "horizontal" 
          ? "-right-12 top-1/2 -translate-y-1/2" 
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )} 
      disabled={!canScrollNext} 
      onClick={scrollNext}
      aria-label="Sonraki slayt"
      {...props}
    >
      <ChevronRight className="h-4 w-4" aria-hidden="true" />
      <span className="sr-only">Sonraki slayt</span>
    </button>
  )
})

CarouselNext.displayName = "CarouselNext"

export { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
}
