import { Oval } from  'react-loader-spinner'
import { LoaderContainer } from './PhonebookStyled'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Loader() {
  return (
    <LoaderContainer>
        <Oval
            height={50}
            width={50}
            color="#f7f9f7"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#000000"
            strokeWidth={5}
            strokeWidthSecondary={5}
        />
    </LoaderContainer>
  )
}
