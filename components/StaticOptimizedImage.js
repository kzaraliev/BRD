import Image from "next/image";

/**
 * Статичен серверен компонент за оптимизирани изображения, специално за LCP
 * Не използва client-side логика, която може да забави рендерирането
 * @param {Object} props
 * @returns {JSX.Element}
 */
export default function StaticOptimizedImage({
  src,
  alt,
  width,
  height,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 90,
  className,
  style,
  ...props
}) {
  // Опростен серверен компонент без client-side state
  return (
    <Image
      src={src}
      alt={alt || "Изображение"}
      width={width}
      height={height}
      sizes={sizes}
      quality={quality}
      priority={true} // Винаги с приоритет за LCP
      loading="eager" // Винаги eager за LCP
      fetchPriority="high" // Висок приоритет при зареждане
      className={className}
      style={{
        objectFit: "cover",
        ...style,
      }}
      format="webp"
      {...props}
    />
  );
}
