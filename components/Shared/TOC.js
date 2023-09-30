'use client'
import { useEffect, useState } from 'react'
import styles from './toc.module.css'
import { useRouter } from 'next/router'
import Image from 'next/image'

function TOC () {
  const [headings, setHeadings] = useState([])
  const router = useRouter()
  const { query, asPath } = router

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll('h2, h3, h4, h5, h6')
    ).map(elem => ({
      id: elem.id,
      text: elem.innerText,
      level: Number(elem.nodeName.charAt(1))
    }))
    setHeadings(elements)
  }, [asPath])

  return (
    <nav>
      <ul className={styles.list}>
        {headings.map(heading => {
          return (
            <li key={heading.id}>
              <img src='/assests/icon.png' alt='icons' />
              <a
                href={`#${heading.id}`}
                onClick={e => {
                  e.preventDefault()
                  document.querySelector(`#${heading.id}`).scrollIntoView({
                    behavior: 'smooth'
                  })
                }}
              >
                {heading.text}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default TOC
