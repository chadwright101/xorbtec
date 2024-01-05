import Image from "next/image";

const ImageComponent = ({
  folder,
  tablet,
  file,
  smallest,
  phone,
  tabletLarge,
  desktop,
  desktopSmall,
  cssClasses,
  quality,
  alt,
  loading,
  pictureCssClasses,
  upToTabletFile,
  width,
  height,
}) => {
  return (
    <picture className={pictureCssClasses}>
      <source
        media="(max-width: 424px)"
        srcSet={`https://ik.imagekit.io/thewrightdesigns/xorbtec/${folder}/tr:w-${
          phone || 425
        },q-${quality || 60}/${!upToTabletFile ? file : upToTabletFile}`}
      />
      <source
        media="(max-width: 799px)"
        srcSet={`https://ik.imagekit.io/thewrightdesigns/xorbtec/${folder}/tr:w-${
          tablet || 800
        },q-${quality || 60}/${!upToTabletFile ? file : upToTabletFile}`}
      />
      <source
        media="(max-width: 1049px)"
        srcSet={`https://ik.imagekit.io/thewrightdesigns/xorbtec/${folder}/tr:w-${
          tabletLarge || 1050
        },q-${quality || 60}/${file}`}
      />
      <source
        media="(max-width: 1199px)"
        srcSet={`https://ik.imagekit.io/thewrightdesigns/xorbtec/${folder}/tr:w-${
          desktopSmall || 1200
        },q-${quality || 60}/${file}`}
      />
      <source
        media="(max-width: 100050px)"
        srcSet={`https://ik.imagekit.io/thewrightdesigns/xorbtec/${folder}/tr:w-${
          desktop || 1450
        },q-${quality || 60}/${file}`}
      />
      <Image
        src={`https://ik.imagekit.io/thewrightdesigns/xorbtec/${folder}/tr:w-${
          smallest || 425
        },q-${quality || 60}/${!upToTabletFile ? file : upToTabletFile}`}
        className={`${cssClasses}`}
        alt={alt}
        loading={loading || "lazy"}
        width={width}
        height={height}
      />
    </picture>
  );
};

export default ImageComponent;
