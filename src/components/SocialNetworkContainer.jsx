import { FaInstagram } from 'react-icons/fa'
import '../styles/components/socialnetworkcontainer.sass'

const socialNetworks = [

  { name: "instagram", icon: <FaInstagram /> },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href="https://www.instagram.com/lobus_dev/" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  )
}

export default SocialNetworkContainer