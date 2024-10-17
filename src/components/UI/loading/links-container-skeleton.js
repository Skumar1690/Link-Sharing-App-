import Image from 'next/image'
import smallLogo from '../../../imgs/logo-devlinks-small.svg'
import './LinkContainerSkeleton.css' // Import the CSS file

function LinkContainerSkeleton() {
  return (
    <div className="link-container-skeleton">
      <Image src={smallLogo} alt="loading indicator" height={42} width={42} />
    </div>
  )
}

export default LinkContainerSkeleton
