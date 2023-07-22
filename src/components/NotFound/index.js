import {NotFoundCon, NFImage, NFhead, NFpara} from './styledComponents'

const NotFound = () => (
  <NotFoundCon>
    <NFImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NFhead>Page Not Found</NFhead>
    <NFpara>We are sorry, the page you requested could not be found.</NFpara>
  </NotFoundCon>
)

export default NotFound
