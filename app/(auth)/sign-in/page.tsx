'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { authClient } from '@/lib/auth-client'

const page = () => {
  const handleSignIn = async () => {
    return await authClient.signIn.social({provider: 'google'})
  }
  return (
    <main className='sign-in'>
        <aside className='testimonial'>
          <Link href='/'>
            <Image src="/assets/icons/logo.svg" height={32} width={32} alt='Logo' />
            <h1>SnapCast</h1>
          </Link>
          <div className='description'>
            <section>
              <figure>
                {Array.from({length: 5}).map((_, index) => (
                  <Image key={index} src="/assets/icons/star.svg" height={20} width={20} alt='Star' />
                ))}
              </figure>
              <p>SnapCast makes screen recording easy. From quick walkthroughs to full presentations, it&pos fast, smooth and sharable in seconds.</p>
              <article>
                <Image src="/assets/images/jason.png" height={64} width={64} alt='Jason' className='rounded-full' />
                <div>
                  <h2>
                    Jason Rivera
                  </h2>
                  <p>Product Designer, NovaByte</p>
                </div>
              </article>
            </section>
          </div>
          <p>&copy; &nbsp; SnapCast {(new Date()).getFullYear()}</p>
        </aside>
        <aside className='google-sign-in'>
          <section>
              <Link href="/">
                  <Image src="/assets/icons/logo.svg" height={40} width={40} alt='Logo' />
                  <h1>SnapCast</h1>
              </Link>
              <p>Create and share your very first <span>SnapCast video</span> in no time!</p>
              <button onClick={handleSignIn}>
                <Image src="/assets/icons/google.svg" height={22} width={22} alt='Google' />
                <span>Sign in with Google</span>
              </button>
          </section>
        </aside>
        <div className='overlay'></div>
    </main>
  )
}

export default page
