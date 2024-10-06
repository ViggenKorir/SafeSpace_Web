import { useState } from 'react'
import React from 'react';
import LandingPage from './components/LandingPage'
import NavBar from './components/NavBar'
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  const featuresData = [
    {
      title: "Virtual Support Groups",
      description: "Connect with others facing similar challenges in virtual group sessions."
    },
    {
      title: "Safe and Anonymous",
      description: "Share your experiences in a secure, judgement-free environment"
    },
    {
      title: "Professional Support",
      description: "Access professional guidance tailored to your needs."
    },
    {
      title: "Community Forums",
      description: "Engage in discussions with a community that understands."
    },
    {
      title: "Resources Library",
      description: "Explore a variety of resources to aid your mental wellness journey."
    },
    {
      title: "Crisis Support",
      description: "Immediate support options available when you need them most."
    }
  ];

  const navItems = [
    { id: "features", label: "Features", onClick: () => alert("Features clicked!") },
    { id: "about-us", label: "About Us", onClick: () => alert("About Us clicked!") },
    { id: "download", label: "Download", onClick: () => alert("Download clicked!") },
    { id: "contact", label: "Contact", onClick: () => alert("Contact clicked!") },
    { id: "sign-up-button", label: "Sign in", onClick: () => alert("Sign in clicked!") }
  ];

  return (
    <>
      <NavBar
        logoText="SafeSpace"
        navItems={navItems}
      />
      <LandingPage
        heroText="Welcome to SafeSpace"
        oneLiner="Your Safe Haven for Mental Wellness"
        landingPageText="Connect, Share, and Heal in a Supportive Online Community"
        featuresData={featuresData}
        bannerTitle="Join Our Supportive Community Today"
        bannerText="Take the first step towards better mental health. Sign up now and connect with others who understand."
      />
      <Analytics />
    </>
  );
}

export default App;
