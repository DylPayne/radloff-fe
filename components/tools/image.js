import { getStrapiMedia } from "../../util/media"
import NextImage from "next/image"

const Image = ({ image, style }) => {
  const { url, alternativeText, width, height } = image.data.attributes

  // const loader = () => {
  //   return getStrapiMedia(image)
  // }

  if (!image) {
    return "Loading"
  }

  return (
    <NextImage
      // loader={loader}
      layout="responsive"
      width={width || "100%"}
      height={height || "100%"}
      objectFit="contain"
      src={url}
      alt={alternativeText || ""}
    />
  )
}

export default Image