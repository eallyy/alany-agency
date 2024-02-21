"use client"
import React from "react";
import Image from "next/image";
import { Button, Typography } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

export default function Home() {
  return (
    <div className="bg-black flex flex-col">
      <header className="bg-transparent py-6 flex justify-center items-center">
        <Image
          src="/agency-banner-white.png"
          height={100}
          width={240}
          alt="Alany Agency Banner Logo"
        />
      </header>
      <main className="flex-grow overflow-y-auto overflow-x-hidden">
        <section className="container mx-auto w-full px-2 justify-center items-center text-center
        md:py-6 md:pb-12
        pb-6
        ">
          <div className="col-span-12 text-white">
            <p className="font-bold uppercase text
            text-3xl
            md:text-4xl
            lg:text-5xl
            ">More Than Products, It&apos;s People</p>

          </div>
          <div className="col-span-12 text-white">
            <p className="font-normal uppercase
            text-2xl
            md:text-3xl
            ">Cultivate Lasting Impact with Alany&apos;s Holistic Approach</p>

          </div>
        </section>


        <section className="container mx-auto w-full xl:px-60 flex justify-center items-center">
          <div className="aspect-video w-screen">
            <iframe
              src="https://player.vimeo.com/video/896231378?h=66672d7d53"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              className="w-full h-full"
              allowFullScreen>
            </iframe>
          </div>
        </section>


        <section className="container mx-auto w-full py-12 px-6 grid justify-center items-center text-center">
          <div className="col-span">
            <Button
              className="flex flex-col"
              variant="outlined"
              color="secondary"
              href="#book-your-call-now"
              sx={{ color: "#ff00f0", borderColor: "#ff00f0", "&:hover": { borderColor: "#00d2ff", color: "#00d2ff" } }}
              >
              <div className="px-6 py-2">
                <Typography className="normal-case" variant="h5" sx={{ fontWeight: "bold" }}>
                  Scale Your Business Now
                </Typography>
                <Typography className="normal-case" variant="body">
                  Click here to book a call with us!
                </Typography>
              </div>
            </Button>
          </div>
        </section>


        <section className="container mx-auto w-full grid lg:grid-cols-2 lg:py-12 items-center">
          <div className="col-span-1 px-6">
            <Image
              src="/what_we_do.jpg"
              width={512}
              height={512}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              alt="Gabrielle Chanel Paris Photoshoot"
            />
          </div>
          <div className="col-span-1 py-6 px-6 text-white">
            <p className="text-5xl font-black uppercase mb-4">What We Do for your business?</p>
            <p className="text-2xl font-normal mb-4">We take new clients to your door through paid advertisement on Google, Facebook, Instagram and YouTube.
              This way, you can focus on what really matters in your business - without having to worry about where your next client is coming from.</p>
          </div>
        </section>


        <section className="container mx-auto w-full grid lg:grid-cols-2 items-center">
          <div className="col-span-1 py-6 px-6 text-white">
            <p className="text-5xl font-black uppercase mb-4">Meet The Founder</p>
            <p className="text-2xl font-normal mb-4">Founded by Emir Alanyalioglu who&apos;s spent the past 4 years attracting the best talent globally.

              With our elusive company culture, calibre of clientele & Emir’s social media in the hundreds of thousands - Alany Agency has our pick of the litter all across the world when it comes to who we are able to hire. The team you see in front of you is a culmination of that.</p>
          </div>
          <div className="col-span-1 px-6 md:px-32 lg:px-16 xl:px-36">
            <Image
              className="rounded-b-full"
              src="/emir-alanyalioglu.png"
              width={512}
              height={512}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              alt="Gabrielle Chanel Paris Photoshoot"
            />
          </div>
        </section>


        <section className="container mx-auto w-full grid lg:grid-cols-12 items-center py-12 lg:py-24">
          <div className="col-span-6 lg:col-span-12 py-6 px-6 text-white text-center">
            <p className="text-4xl font-bold uppercase">Companies That Trust Us</p>
          </div>
          <div className="col-span-3 items-center justify-center mx-auto px-6 pb-6 lg:pb-0 grayscale hover:grayscale-0 transition-all duration-300">
            <Image
              src="/companies/logo_placeholder.png"
              height={256}
              width={885}
              alt="Company Logo"
              className="w-full"
            />
          </div>
          <div className="col-span-3 items-center justify-center mx-auto px-6 pb-6 lg:pb-0 grayscale hover:grayscale-0 transition-all duration-300">
            <Image
              src="/companies/logo_placeholder.png"
              height={256}
              width={885}
              alt="Company Logo"
              className="w-full"
            />
          </div>
          <div className="col-span-3 items-center justify-center mx-auto px-6 pb-6 lg:pb-0 grayscale hover:grayscale-0 transition-all duration-300">
            <Image
              src="/companies/logo_placeholder.png"
              height={256}
              width={885}
              alt="Company Logo"
              className="w-full"
            />
          </div>
          <div className="col-span-3 items-center justify-center mx-auto px-6 pb-6 lg:pb-0 grayscale hover:grayscale-0 transition-all duration-300">
            <Image
              src="/companies/logo_placeholder.png"
              height={256}
              width={885}
              alt="Company Logo"
              className="w-full"
            />
          </div>
        </section>


        <section className="container mx-auto w-full grid lg:grid-cols-2 items-center">
          <div className="col-span-2 lg:col-span-1 py-6 px-6 text-white" id="schedule-your-call">
            <p className="text-2xl font-black uppercase mb-4">Schedule Your Call With Emir</p>
            <p className="text-2xl font-bold uppercase mb-4">Free 15-Minute Intro Call</p>
            <p className="text-2xl font-normal mb-4">By the end of this Audit call, you will have a clear understanding of the next steps you can take for your business to start generating consistent and reliable results online with Funnels & Paid Advertising.
              Find a time on Emir’s calendar to schedule your call today and we look forward to speaking to you soon!</p>
          </div>
          <div className="col-span-1 py-6 px-6 text-white hidden lg:block">
            <p className="text-l font-black uppercase mb-4">THIS AUDIT CALL IS PERFECT FOR:</p>
            <p className="text-l font-normal mb-4"><CheckIcon /> Businesses looking to convert their current website into a <wow className="font-extrabold">high quality & streamlined funnel format</wow>.</p>
            <p className="text-l font-normal mb-4"><CheckIcon /> Businesses looking to take their offline business <wow className="font-extrabold">online</wow>.</p>
            <p className="text-l font-normal mb-4">​<CheckIcon /> Businesses looking to understand their <wow className="font-extrabold">increased revenue potential</wow> with funnels & conversion rate optimization.</p>
            <p className="text-l font-normal mb-4"><CheckIcon /> ​Businesses looking to <wow className="font-extrabold">maximize their conversion rates</wow> & <wow className="font-extrabold">average order value</wow>.</p>
            <p className="text-l font-normal mb-4">​<CheckIcon /> Businesses looking for a reliable agency that can <wow className="font-extrabold">make their company a priority</wow>.</p>
          </div>
        </section>


        <section className="container mx-auto w-full flex justify-center items-center">
          <div
            id="book-your-call-now"
            className="calendly-inline-widget w-full h-[800px] md:h-[900px] lg:h-[700px]"
            data-url="https://calendly.com/alany-agency-emir/15min-intro-call?background_color=000000&text_color=ffffff&primary_color=00d2ff">
          </div>
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        </section>


        <section className="container mx-auto w-full py-12 flex justify-center items-center lg:hidden">
          <div className="col-span-1 py-6 px-6 text-white">
            <p className="text-l font-black uppercase mb-4">THIS AUDIT CALL IS PERFECT FOR:</p>
            <p className="text-l font-normal mb-4"><CheckIcon /> Businesses looking to convert their current website into a <wow className="font-extrabold">high quality & streamlined funnel format</wow>.</p>
            <p className="text-l font-normal mb-4"><CheckIcon /> Businesses looking to take their offline business <wow className="font-extrabold">online</wow>.</p>
            <p className="text-l font-normal mb-4">​<CheckIcon /> Businesses looking to understand their <wow className="font-extrabold">increased revenue potential</wow> with funnels & conversion rate optimization.</p>
            <p className="text-l font-normal mb-4"><CheckIcon /> ​Businesses looking to <wow className="font-extrabold">maximize their conversion rates</wow> & <wow className="font-extrabold">average order value</wow>.</p>
            <p className="text-l font-normal mb-4">​<CheckIcon /> Businesses looking for a reliable agency that can <wow className="font-extrabold">make their company a priority</wow>.</p>
          </div>
        </section>
      </main>

      <footer className="py-4 px-8 text-white">
        <div className="w-full grid justify-center items-center pb-2">
          <Image
            src="/square_icon.png"
            alt="Alany Agency Square Logo"
            width={32}
            height={32}
          />
        </div>
        <p className="text-center text-xs">Part of the <a href="https://alany.co" className="underline decoration-alany-pink">Alany Coorporation</a> © 2024 Alany Agency</p>
        <p className="text-center text-xs">View our <a href="/" className="underline decoration-alany-blue">Privacy Policy</a>, <a href="/" className="underline decoration-alany-blue">Earnings Disclaimer</a>, <a href="/" className="underline decoration-alany-blue">Terms Of Service</a>.</p>
      </footer>
    </div>
  );
}
