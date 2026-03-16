export const posts = [
  {
    slug: 'why-i-started-gg-apps',
    title: 'Why I Started GG Apps',
    date: '2026-03-10',
    readTime: '3 min read',
    excerpt:
      'A short note on why I registered a company in the UK to build iOS apps — and what I hope to achieve with it.',
    tags: ['GG Apps', 'Founder'],
    content: `
I've been building apps for a while now. Mostly as a solo developer, mostly for iOS. At some point I realised I kept coming back to the same idea: I want to build apps that are genuinely useful, well-made, and respectful of the people who use them.

That sounds obvious, but look at the App Store. Most apps are either overloaded with features nobody asked for, plastered with ads, or quietly uploading your data to servers you've never heard of. I think there's room for something better.

## Why the UK

The UK is one of the best places in the world to build a tech company. There's a mature legal framework that both protects consumers and supports innovation, a thriving developer ecosystem, and strong international credibility. Companies House makes incorporation transparent and straightforward, and the regulatory environment — including UK GDPR — sets a high bar for data protection that I think every app company should meet anyway. It's a standard I'm proud to build to, not just comply with.

For a company focused on privacy-first iOS applications, being based in a jurisdiction with strong data protection laws isn't just practical — it's a statement about what the company stands for.

## What I'm Building

The first product is Trazo — an AI image generator designed to run entirely on your iPhone. No servers, no subscriptions, no data leaving your phone. The goal is for the entire AI pipeline to run on Apple's Neural Engine.

It's still in development, but the core idea is simple: take something that usually requires a cloud server and a monthly fee, and make it work offline, privately, on the device you already own.

## What's Next

Trazo is just the beginning. I have a pipeline of product ideas — all built around the same principles: useful technology, great design, and respect for the user. The goal is to build a company that ships software people genuinely love using, and to grow it one great product at a time.

If you're interested in what I'm building, stick around — I'll be sharing the journey here.
    `,
  },
  {
    slug: 'offline-ai-future-of-mobile',
    title: 'Why Offline AI Is the Future of Mobile Applications',
    date: '2026-02-28',
    readTime: '6 min read',
    excerpt:
      'Cloud-based AI is powerful but comes with trade-offs: latency, cost, and privacy concerns. On-device AI models are changing the equation for mobile developers.',
    tags: ['AI/ML', 'iOS', 'Privacy'],
    content: `
The AI revolution has been largely cloud-dependent. Send data to a server, wait for processing, receive results. For many applications, this works well enough. But for mobile apps — where users expect instant responses, offline capability, and data privacy — the cloud model has fundamental limitations.

## The Problem with Cloud AI on Mobile

Every API call introduces latency. Even on fast connections, a round trip to a GPU server adds 500ms-2s of waiting. For creative tools like image generators, this means users stare at loading spinners instead of creating. Worse, without internet, the app becomes a brick.

Then there's cost. At $0.01-0.05 per generation, a popular AI app can burn through thousands of dollars daily in server costs. This forces aggressive monetisation — paywalls, ads, usage limits — degrading the user experience.

And privacy? Users are increasingly aware that their prompts, photos, and data are being sent to remote servers. For sensitive use cases, this is a dealbreaker.

## The On-Device Revolution

Apple's Neural Engine, first introduced with the A11 Bionic, has quietly become one of the most powerful AI accelerators available. The latest chips can perform over 35 trillion operations per second on supported devices — more than enough to run sophisticated AI models locally.

With Core ML and frameworks like Apple's ml-stable-diffusion, it's now possible to run Stable Diffusion models on an iPhone. No server, no internet, no data leaving the device. The entire pipeline — text encoding, diffusion, decoding — happens on the Neural Engine in seconds.

## What This Means for Developers

For developers, on-device AI offers compelling advantages:

**Zero server costs.** Your most expensive user and your cheapest user cost exactly the same: nothing. This fundamentally changes unit economics.

**Instant responses.** No network latency means generation feels immediate. Users stay in their creative flow.

**Genuine privacy.** When data never leaves the device, you can make real privacy claims — not just vague promises about encryption.

**Offline capability.** Users can create anywhere — on planes, in the countryside, in areas with poor connectivity. The app works regardless of internet connection.

## The Trade-offs

On-device AI isn't without challenges. Model sizes need to be optimised (quantisation to 4-bit brings a 6GB model down to ~1.8GB). Not all devices have sufficient hardware — you need to set reasonable minimum requirements. And the results, while impressive, may not match the absolute cutting edge of cloud models with 10x the parameters.

But for most consumer use cases, the trade-offs are worth it. Users care about speed, privacy, and reliability more than marginal quality improvements.

## Looking Ahead

I think on-device AI will become the default for most mobile applications within the next few years. As chips get faster and models get more efficient, the gap between cloud and on-device quality will continue to shrink.

This is the approach I'm taking with Trazo — the goal is for every generation to happen on the user's device. It's the direction I believe mobile development is heading.
    `,
  },
  {
    slug: 'core-ml-quantisation-lessons',
    title: 'What I Learned About Core ML Model Quantisation',
    date: '2026-02-10',
    readTime: '5 min read',
    excerpt:
      'Taking a 6GB Stable Diffusion model and squeezing it onto an iPhone taught me more about trade-offs than any textbook. Here are the practical lessons.',
    tags: ['Core ML', 'AI/ML', 'iOS'],
    content: `
When I started working on running Stable Diffusion on-device for Trazo, the first question was obvious: how do you fit a 6GB model onto a phone?

The answer is quantisation — reducing the precision of model weights from 32-bit or 16-bit floats down to 8-bit or even 4-bit integers. In theory, it's straightforward. In practice, it's full of surprises.

## The Basics

A full-precision SDXL model weighs about 6.5GB. That's too large to ship in an app bundle, too large to fit comfortably in memory alongside the rest of iOS, and frankly too large for most users to want to download.

Quantisation reduces this dramatically:

- **16-bit (FP16):** ~3.2GB — better, but still heavy
- **8-bit (INT8):** ~1.6GB — workable for on-device
- **4-bit (INT4):** ~0.8GB — ideal for mobile, but quality trade-offs

Apple's coremltools provides the conversion pipeline. You start with a PyTorch or Diffusers model, convert it through Apple's ml-stable-diffusion tools, and apply quantisation during or after conversion.

## Lesson 1: Not All Layers Quantise Equally

The biggest surprise was that quantising everything uniformly to 4-bit produces noticeably worse results. Some layers — particularly the attention layers and the final output convolutions — are far more sensitive to precision loss than others.

The solution is mixed-precision quantisation: keep sensitive layers at 8-bit while quantising the bulk of the model to 4-bit. This gives you most of the size savings with minimal quality loss.

## Lesson 2: Test on Real Devices, Not Simulators

Core ML runs completely differently on actual Neural Engine hardware versus the simulator. Inference times, memory pressure, and even output quality can vary. I burned a week debugging an issue that only appeared on device — the simulator was masking a memory allocation problem.

Always test quantised models on the oldest device you plan to support. In my case, that's the A14 Bionic (iPhone 12).

## Lesson 3: The Download Experience Matters

Even at 1.8GB, the model is a significant download. I ended up implementing background downloading with progress tracking, so users can start the download and continue using other parts of the app. The model files live in the app's Documents directory so they persist across updates.

Small UX decisions like showing estimated time remaining and allowing pause/resume make a big difference in whether users actually complete the download.

## Lesson 4: Measure What Users See, Not Just Benchmarks

FID scores and CLIP similarity are useful metrics, but they don't tell you everything. I found that 4-bit models sometimes produce images that score well on benchmarks but look subtly wrong to human eyes — slightly muddy colours, loss of fine detail in faces.

The best test is generating a hundred images with the same prompts across model variants and looking at them side by side. Your eyes catch things metrics miss.

## Where I Landed

For Trazo, I settled on a mixed-precision approach: 4-bit for the bulk of the UNet, 8-bit for attention layers and the VAE decoder. Total model size is about 1.8GB, inference takes 4-8 seconds on an A15 chip, and the quality is genuinely good for a mobile app.

It's not perfect — cloud-based SDXL with full precision will always produce slightly better results. But for an app that works offline, costs nothing to run, and keeps your data private, I think it's the right trade-off.
    `,
  },
  {
    slug: 'building-privacy-first-apps-2026',
    title: 'Building Privacy-First Applications in 2026',
    date: '2026-01-20',
    readTime: '5 min read',
    excerpt:
      'With UK GDPR enforcement increasing and user awareness growing, privacy-first architecture is no longer optional. Here\'s how I approach it.',
    tags: ['Privacy', 'UK GDPR', 'iOS'],
    content: `
Privacy regulations are tightening globally, and users are more aware of their data rights than ever. As developers, we have a choice: bolt on privacy compliance as an afterthought, or build it into the architecture from day one. I prefer the latter.

## The Regulatory Landscape

The UK GDPR (retained from EU GDPR post-Brexit) gives individuals extensive rights over their personal data: the right to access, rectify, erase, restrict processing, data portability, and more. The ICO (Information Commissioner's Office) has been increasingly active in enforcement, with fines reaching millions of pounds.

For app developers, this means every feature that touches personal data needs a clear legal basis, transparent processing, and technical measures to protect that data.

## Privacy by Design: My Approach

I try to follow these principles on every project:

**Proactive, not reactive.** Privacy considerations come before the first line of code. During the design phase, I map every data flow and ask: does this data need to leave the device?

**Privacy as the default.** Users shouldn't need to take action to protect their privacy. The most private setting is always the default.

**Privacy embedded into design.** It's not a checkbox feature — it's an architectural decision. When designing Trazo, the decision to run AI entirely on-device wasn't just a technical choice — it was a privacy choice that eliminated entire categories of risk.

**Full functionality without surveillance.** You don't need to track users to build great products. Analytics can be aggregated and anonymised. Personalisation can happen on-device.

## Practical Implementation for iOS

Apple provides excellent tools for privacy-first development:

- **App Privacy Labels** in the App Store force transparency about data collection. Achieving "Data Not Collected" is the gold standard.
- **On-device processing** with Core ML, Vision, and Natural Language frameworks eliminates the need to send data to servers.
- **App Transport Security** ensures all network connections use HTTPS.
- **Keychain Services** provides secure storage for sensitive credentials.

## The Business Case

Privacy isn't just compliance — it's a competitive advantage. Users trust apps that respect their data. In the App Store, apps with "Data Not Collected" privacy labels can see higher conversion rates. And with zero server-side data storage, you dramatically reduce your attack surface and liability.

Building privacy-first is building smarter.
    `,
  },
  {
    slug: 'mobile-app-development-trends-2026',
    title: 'iOS Development: Trends Worth Watching in 2026',
    date: '2025-12-18',
    readTime: '7 min read',
    excerpt:
      'From on-device AI to spatial computing, the iOS landscape is evolving rapidly. Here are the trends that I think matter most.',
    tags: ['iOS', 'Trends', 'Strategy'],
    content: `
The mobile development landscape never stands still. Several trends are reshaping how we build, distribute, and monetise iOS applications. Here's my take on what matters most.

## 1. On-Device AI Goes Mainstream

Apple's Neural Engine has made on-device machine learning practical for consumer applications. AI features are moving from cloud APIs to local inference across categories: photo editing, writing assistance, health monitoring, and creative tools.

The economics are compelling. Cloud AI costs scale linearly with users. On-device AI costs nothing per user after the initial development investment. For apps targeting a large user base, this difference is significant.

## 2. Privacy as a Feature, Not a Constraint

Users increasingly choose apps based on privacy credentials. Apple's App Tracking Transparency framework fundamentally changed the advertising ecosystem. Now, privacy labels in the App Store influence download decisions.

Smart developers are turning privacy into a marketing advantage. "Data Not Collected" isn't just a compliance label — it's a trust signal that drives conversions.

## 3. Subscription Fatigue and the Return of One-Time Purchases

After years of everything becoming a subscription, there's pushback. Users are overwhelmed by recurring charges and more selective about which subscriptions they maintain.

Forward-thinking developers are experimenting with hybrid models: freemium with optional one-time purchases, lifetime access tiers alongside subscriptions, and pay-per-feature models that let users buy only what they need.

## 4. SwiftUI Maturity

SwiftUI has reached a level of maturity where it's a genuine first choice for most new projects. The remaining gaps — particularly around complex navigation and custom layouts — are closing with each release.

For new apps, I default to SwiftUI unless there's a specific reason to use UIKit. The productivity gains in iteration speed and preview support are substantial.

## 5. Spatial Computing and Vision Pro

Apple Vision Pro has opened a new interaction paradigm. While the installed base is still small, the design patterns — spatial UI, eye tracking, hand gestures — are influencing how we think about mobile interfaces too.

Apps that consider spatial context (AR overlays, environment-aware UI) will be better positioned as the hardware becomes more accessible.

## 6. App Store Optimisation Evolves

With millions of apps competing for attention, ASO has become more sophisticated. It's no longer just about keywords and screenshots. Custom product pages, in-app events, and A/B tested store listings are becoming standard practice.

The apps that win are those that treat the App Store listing as a conversion funnel, not just a description page.

## What This Means

If you're planning an iOS product in 2026, here's what I'd suggest:

- **Start with privacy.** It's easier and cheaper to build privacy-first than to retrofit it later.
- **Consider on-device AI** for any feature that processes user data. The technology is ready.
- **Think about your monetisation model carefully.** Subscriptions work, but only if you continuously deliver value.
- **Invest in ASO** from day one. The best app in the world fails if nobody finds it.

These are the principles I'm applying to everything I build at GG Apps.
    `,
  },
];
