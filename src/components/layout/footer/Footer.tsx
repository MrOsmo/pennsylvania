import scss from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={scss.footer}>
      <p>Built with <span>♡</span> by our <span>Team</span></p>
    </footer>
  )
}

export default Footer