"use client"
import React from "react";
import Image from "next/image";
import { Button, Typography } from "@mui/material";

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
        <section className="container mx-auto w-full md:py-12 flex justify-center items-center">
          <div>
            <iframe
              src="https://player.vimeo.com/video/896231378?h=66672d7d53"
              width="640"
              height="360"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              className="w-screen sm:h-96"
              allowFullScreen>
            </iframe>
          </div>
        </section>


        <section className="container mx-auto w-full py-12 grid lg:grid-cols-2 items-center">
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
          <div className="col-span-1 py-6 px-6">
            <p className="text-5xl font-black uppercase mb-4">What We Do for your business?</p>
            <p className="text-2xl font-normal mb-4">We take new clients to your door through paid advertisement on Google, Facebook, Instagram and YouTube.
              This way, you can focus on what really matters in your business - without having to worry about where your next client is coming from.</p>
          </div>
        </section>


        <section className="container mx-auto w-full py-12 px-6 grid justify-center items-center">
          <div className="col-span">
            <Button
              className="flex flex-col"
              variant="outlined"
              color="secondary"
              sx={{ color: "#ff00f0", borderColor: "#ff00f0", "&:hover": { borderColor: "#00d2ff", color: "#00d2ff" } }}
              >
              <div className="px-6 py-2">
                <Typography className="normal-case" variant="h5" sx={{ fontWeight: "bold" }}>
                  Scale Your Business Now
                </Typography>
                <Typography className="normal-case" variant="body1">Click here to book a call with us!</Typography>
              </div>
            </Button>
          </div>
        </section>

        <section className="container mx-auto w-full py-12 flex justify-center items-center">
          <div
            className="calendly-inline-widget h-svh w-full"
            data-url="https://calendly.com/promiroffical/30min?background_color=000000&text_color=ffffff&primary_color=00d2ff">
          </div>
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        </section>
      </main>
      <footer className="py-4 px-8">
        <p className="text-center text-xs">Part of the <a href="https://alany.co" className="underline decoration-alany-pink">Alany Coorporation</a> © 2024 Alany Agency</p>
        <p className="text-center text-xs">View our <a href="/" className="underline decoration-alany-blue">Privacy Policy</a>, <a href="/" className="underline decoration-alany-blue">Earnings Disclaimer</a>, <a href="/" className="underline decoration-alany-blue">Terms Of Service</a>.</p>
      </footer>
    </div>
  );
}
