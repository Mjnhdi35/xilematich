import { useRouter } from 'next/router'
import { Container } from '../atoms/Container'

export interface IFooterProps {}

export const Footer = () => (
  <footer className="justify-between pt-8 my-12 mt-8 text-xs sm:flex">
    <Container>
      <a target="_blank" href="https://www.mdj.com" rel="noreferrer">
        Made by
        <span
          // Brand color!
          className="font-black px-1 py-0.5"
        >
          Mdj
        </span>{' '}
        2025
      </a>
      <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
        <div>Privacy policy</div>
        <div>Cookie policy</div>
        <div>Cookie settings</div>
        <div>Terms and Conditions</div>
      </div>
    </Container>
  </footer>
)
