 async src="https://www.googletagmanager.com/gtag/js?id=G-NWG85NQ1SP"

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-NWG85NQ1SP');

  // Har site ka unique name track karein
  let siteName = window.location.hostname;
  gtag('event', 'site_visited', {
    'site_name': siteName
  });

