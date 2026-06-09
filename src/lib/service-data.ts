export interface ServicePage {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  approach: string;
  stats: { label: string; value: string }[];
}

export const SERVICE_PAGES: Record<string, ServicePage> = {
  "social-media-marketing": {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    tagline: "Audiences don't follow brands. They follow stories worth watching.",
    description:
      "We build always-on content ecosystems that turn passive scrollers into loyal communities. From editorial calendars to viral-ready reels, we engineer social presences that compound — not just post.",
    deliverables: [
      "Monthly content strategy & editorial calendar",
      "Platform-native content creation (Reels, Stories, Carousels, Posts)",
      "Community management & real-time engagement",
      "Hashtag strategy & trend monitoring",
      "Monthly performance reports with actionable insights",
      "Competitor benchmarking & social listening",
    ],
    approach:
      "We begin with a deep audit of your current social presence, audience demographics and competitor landscape. Every brand gets a custom content playbook — not a recycled template — built around the intersection of your story and your audience's scroll habits.\n\nOur content studio produces thumb-stopping assets designed for each platform's algorithm. We don't just make things pretty — we make things that perform. Every caption, every hook, every CTA is tested against engagement benchmarks and optimised in real time.\n\nDistribution is the other half of the equation. We time posts for peak engagement, manage communities like they're VIP guest lists, and use social listening to insert your brand into conversations that matter. The result: organic growth that compounds month over month.\n\nReporting is never an afterthought. You get transparent dashboards showing reach, engagement rate, follower growth and content performance — with clear recommendations for the month ahead.",
    stats: [
      { label: "Avg. Engagement Rate", value: "6.8%" },
      { label: "Content Pieces / Month", value: "120+" },
      { label: "Organic Reach Generated", value: "12M+" },
      { label: "Accounts Managed", value: "35+" },
    ],
  },

  "performance-marketing": {
    slug: "performance-marketing",
    title: "Performance Marketing",
    tagline: "Every rupee tracked. Every conversion earned.",
    description:
      "Paid media engineered for ROAS, not vanity metrics. We architect full-funnel campaigns across Meta, Google, YouTube and programmatic — with creative, targeting and bidding all optimised under one roof.",
    deliverables: [
      "Full-funnel campaign strategy (awareness → consideration → conversion)",
      "Meta Ads, Google Ads & YouTube campaign management",
      "Creative production for ad formats (static, video, carousel)",
      "Landing page optimisation & A/B testing",
      "Conversion tracking, pixel setup & attribution modelling",
      "Weekly optimisation & monthly performance deep-dives",
    ],
    approach:
      "Performance starts with understanding the customer journey — not just the click. We map your entire funnel, identify drop-off points and build campaigns that move prospects through every stage with intent.\n\nCreative is our secret weapon. While most agencies treat ads as an afterthought, we produce platform-native creative in-house — tested across audiences, formats and placements until we find the combinations that print money.\n\nBidding strategy, audience segmentation and budget allocation are managed with daily precision. We don't set and forget — we optimise in real time, shifting spend toward what's working and killing what isn't before it wastes a single rupee.\n\nTransparency is non-negotiable. You see every metric, every test, every decision. Our reporting connects ad spend to actual revenue, not just impressions — because ROAS is the only metric that pays rent.",
    stats: [
      { label: "Peak ROAS Achieved", value: "7.2x" },
      { label: "Revenue Generated", value: "₹45L+" },
      { label: "Avg. CVR Lift", value: "38%" },
      { label: "Campaigns Managed", value: "200+" },
    ],
  },

  "photography-videography": {
    slug: "photography-videography",
    title: "Photography & Videography",
    tagline: "Your brand deserves frames that outlive the feed.",
    description:
      "Cinematic capture for hospitality, lifestyle, fashion and brand storytelling. From drone aerials to intimate product close-ups, we produce visual assets that elevate every touchpoint — not just the Instagram grid.",
    deliverables: [
      "Pre-production planning, mood boards & shot lists",
      "On-location photo & video shoots (lifestyle, product, architecture)",
      "Drone & aerial cinematography",
      "Professional editing, colour grading & retouching",
      "Platform-optimised exports (social, web, print, OTA)",
      "Raw asset delivery & brand media library",
    ],
    approach:
      "Every shoot begins weeks before the camera turns on. We develop detailed mood boards, shot lists and creative briefs that align the visual output with your brand strategy, seasonal campaigns and distribution channels.\n\nOn set, our team works with editorial precision — capturing moments that feel authentic yet aspirational. We shoot for multiple platforms simultaneously, ensuring you walk away with assets for social, web, print, OTA listings and advertising.\n\nPost-production is where craft meets consistency. Every frame is colour-graded to your brand palette, retouched to editorial standards and exported in formats optimised for every channel — from Instagram Reels to billboard-ready prints.\n\nThe result is a visual library that doesn't just fill your content calendar — it builds brand equity with every single frame.",
    stats: [
      { label: "Shoots Completed", value: "350+" },
      { label: "Assets Delivered", value: "25K+" },
      { label: "Drone Shoots", value: "80+" },
      { label: "Brands Captured", value: "50+" },
    ],
  },

  "influencer-marketing": {
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    tagline: "The right voices. The right audiences. The right results.",
    description:
      "Curated talent partnerships that feel native to your category. We handle everything from influencer discovery and negotiation to campaign execution and performance tracking — so your brand shows up in the feeds that matter.",
    deliverables: [
      "Influencer discovery, vetting & audience analysis",
      "Campaign strategy & creative briefing",
      "Contract negotiation & talent management",
      "Content approval workflows & quality control",
      "Campaign performance tracking & ROI analysis",
      "Long-term ambassador programme development",
    ],
    approach:
      "We don't chase follower counts — we chase audience alignment. Our discovery process filters creators by niche relevance, engagement authenticity, audience demographics and brand-fit, ensuring every partnership drives genuine impact.\n\nEvery influencer receives a detailed creative brief that balances brand guidelines with creative freedom. The best influencer content doesn't feel like an ad — it feels like a recommendation from a trusted friend. That's the line we walk.\n\nExecution is managed end-to-end: contracts, timelines, content approvals, posting schedules and amplification strategy. You never have to chase a creator or wonder where your campaign stands.\n\nPost-campaign, we deliver comprehensive performance reports that go beyond vanity metrics — tracking reach, engagement, website traffic, conversions and cost-per-acquisition to prove the ROI of every partnership.",
    stats: [
      { label: "Influencers Activated", value: "500+" },
      { label: "Campaign Reach", value: "40M+" },
      { label: "Avg. Engagement", value: "8.2%" },
      { label: "Categories Covered", value: "15+" },
    ],
  },

  "branding-identity": {
    slug: "branding-identity",
    title: "Branding & Identity",
    tagline: "Logos fade. Brand systems endure.",
    description:
      "We design identity systems built to scale — from logo architecture and colour palettes to typography hierarchies and brand voice. Every element engineered to make your brand instantly recognisable across every touchpoint.",
    deliverables: [
      "Brand strategy, positioning & archetype definition",
      "Logo design (primary, secondary, submarks, favicon)",
      "Colour palette, typography system & visual language",
      "Comprehensive brand guidelines document",
      "Stationery, packaging & collateral design",
      "Digital asset templates (social, email, presentations)",
    ],
    approach:
      "Branding begins with strategy, not aesthetics. We start with deep immersion — understanding your category, competition, customer psychology and business ambitions. The goal is to find the strategic position only your brand can own.\n\nFrom that foundation, we build a visual identity system — not just a logo. Logo architecture, colour science, type hierarchies, photography direction, illustration style and brand voice all work together as a coherent system that scales from a favicon to a billboard.\n\nEvery deliverable is pressure-tested across real-world applications: business cards, social grids, websites, packaging, signage and advertising. We don't design in a vacuum — we design for the environments where your brand will actually live.\n\nThe final brand book becomes your team's operating manual — a reference that ensures consistency whether you're briefing a printer, launching a campaign or onboarding a new designer three years from now.",
    stats: [
      { label: "Brand Systems Built", value: "60+" },
      { label: "Industries Covered", value: "12+" },
      { label: "Avg. Project Duration", value: "6 wks" },
      { label: "Client Retention", value: "94%" },
    ],
  },

  "email-marketing": {
    slug: "email-marketing",
    title: "Email Marketing",
    tagline: "Your inbox is still the most profitable channel in marketing.",
    description:
      "Lifecycle email journeys that turn subscribers into buyers and buyers into advocates. From welcome sequences to win-back campaigns, we design, write and automate email programmes that generate revenue on autopilot.",
    deliverables: [
      "Email strategy & lifecycle journey mapping",
      "Template design & responsive HTML development",
      "Copywriting for campaigns, automations & sequences",
      "List segmentation & audience targeting",
      "A/B testing (subject lines, content, send times)",
      "Performance analytics & deliverability monitoring",
    ],
    approach:
      "Email is a system, not a blast. We begin by mapping your customer lifecycle — identifying the key moments where the right message can drive a purchase, build loyalty or prevent churn.\n\nDesign and copy work in tandem. Every email is crafted to look beautiful on every device, load fast and drive a single clear action. Subject lines are tested, preview text is optimised and CTAs are placed with conversion psychology in mind.\n\nAutomation is where the magic happens. Welcome series, abandoned cart flows, post-purchase nurtures and re-engagement campaigns run 24/7 — generating revenue while you sleep. We build these flows once and optimise them continuously.\n\nDeliverability is the invisible foundation. We manage sender reputation, authentication protocols and list hygiene to ensure your emails land in the primary inbox — not the promotions tab or, worse, the spam folder.",
    stats: [
      { label: "Avg. Open Rate", value: "38%" },
      { label: "Revenue from Email", value: "₹18L+" },
      { label: "Automations Built", value: "150+" },
      { label: "Emails Sent / Month", value: "500K+" },
    ],
  },

  "whatsapp-marketing": {
    slug: "whatsapp-marketing",
    title: "WhatsApp Marketing",
    tagline: "Where conversations convert faster than funnels.",
    description:
      "Conversational commerce that closes warm leads in hours, not days. We design WhatsApp campaigns, chatbot flows and broadcast strategies that turn India's favourite messaging app into your most profitable sales channel.",
    deliverables: [
      "WhatsApp Business API setup & configuration",
      "Broadcast campaign strategy & execution",
      "Chatbot flow design & automation",
      "Template message creation & approval management",
      "Lead qualification & CRM integration",
      "Performance tracking & conversation analytics",
    ],
    approach:
      "WhatsApp is the most intimate channel a brand can operate on — which means it requires precision, not volume. We start by defining your conversational strategy: when to message, what to say and how to move a conversation from interest to action.\n\nOur chatbot flows are designed to feel human. Smart branching logic handles FAQs, qualifies leads and routes high-intent prospects to your sales team — all without making the customer feel like they're talking to a machine.\n\nBroadcast campaigns are crafted with the same care as email — segmented audiences, compelling copy, rich media and clear CTAs. We manage template approvals, ensure compliance and optimise send times for maximum open rates.\n\nThe result is a channel that delivers 90%+ open rates, sub-2-hour response times and conversion rates that make every other channel jealous.",
    stats: [
      { label: "Avg. Open Rate", value: "94%" },
      { label: "Avg. Response Time", value: "<2 hrs" },
      { label: "Messages Sent", value: "1M+" },
      { label: "Conversion Lift", value: "3.2x" },
    ],
  },

  "website-development": {
    slug: "website-development",
    title: "Website Development",
    tagline: "Fast, beautiful, conversion-tuned — and built to last.",
    description:
      "We build websites that load fast, rank well and convert visitors into customers. From editorial portfolio sites to full e-commerce platforms, every build combines premium design with modern engineering.",
    deliverables: [
      "UX strategy, wireframing & information architecture",
      "Custom UI design (responsive, mobile-first)",
      "Frontend development (React, Next.js, modern stack)",
      "CMS integration & content management setup",
      "SEO foundation (technical, on-page, schema markup)",
      "Performance optimisation, analytics & launch support",
    ],
    approach:
      "Every website we build starts with user research and business goals — not a template. We map the customer journey, define conversion paths and design information architecture that guides visitors toward the actions that matter most to your business.\n\nDesign is where brand meets experience. Our UI work is editorial, premium and intentional — every layout, every interaction, every micro-animation serves the brand story and the business objective simultaneously.\n\nDevelopment is handled with modern tools and best practices. We build on frameworks like React and Next.js, ensuring your site is fast, accessible, SEO-friendly and easy to maintain. No bloat, no plugins you don't need, no technical debt.\n\nPost-launch, we provide analytics setup, performance monitoring and ongoing optimisation support — because a website is never truly finished, it's a living asset that should improve every month.",
    stats: [
      { label: "Sites Launched", value: "40+" },
      { label: "Avg. Page Speed", value: "95+" },
      { label: "Avg. Bounce Rate Drop", value: "32%" },
      { label: "SEO Traffic Lift", value: "2.8x" },
    ],
  },

  "crm-services": {
    slug: "crm-services",
    title: "CRM Services",
    tagline: "Stop losing leads. Start building relationships.",
    description:
      "We set up, segment and automate your CRM so growth stops being manual. From lead capture to lifecycle marketing, we build the data infrastructure that turns one-time buyers into lifelong customers.",
    deliverables: [
      "CRM platform selection, setup & configuration",
      "Data migration, cleanup & enrichment",
      "Contact segmentation & lead scoring models",
      "Automated workflow design (lead nurture, follow-ups, alerts)",
      "Sales pipeline setup & reporting dashboards",
      "Team training & ongoing optimisation support",
    ],
    approach:
      "Most businesses have data — they just don't have a system. We start by auditing your existing customer data, sales processes and communication touchpoints to design a CRM architecture that fits how your team actually works.\n\nSetup is meticulous. We configure pipelines, custom fields, automation triggers and reporting dashboards so every lead is tracked, every follow-up is automated and every opportunity is visible to the right person at the right time.\n\nSegmentation transforms your contact list from a spreadsheet into a strategic asset. We build dynamic segments based on behaviour, purchase history, engagement and lifecycle stage — enabling hyper-targeted communication that converts.\n\nThe endgame is a system that runs itself. Automated workflows handle the repetitive work — lead assignment, follow-up sequences, re-engagement campaigns — so your team can focus on closing deals and building relationships.",
    stats: [
      { label: "CRM Systems Deployed", value: "30+" },
      { label: "Contacts Managed", value: "200K+" },
      { label: "Automation Workflows", value: "180+" },
      { label: "Lead Response Time", value: "<15 min" },
    ],
  },

  "ota-listings-management": {
    slug: "ota-listings-management",
    title: "OTA Listings & Management",
    tagline: "Hospitality distribution done with discipline, not guesswork.",
    description:
      "We optimise your presence across Booking.com, MakeMyTrip, Agoda, Airbnb and every OTA that matters — ensuring your property is discoverable, competitively priced and beautifully presented to every potential guest.",
    deliverables: [
      "OTA listing creation, optimisation & content writing",
      "Professional photography direction for OTA platforms",
      "Rate parity management & dynamic pricing strategy",
      "Review monitoring, response management & reputation building",
      "Channel manager setup & inventory synchronisation",
      "Monthly performance reports with occupancy analytics",
    ],
    approach:
      "OTA visibility is a science. We audit your current listings across every platform, identify ranking factors you're missing and rebuild your presence with optimised titles, descriptions, photography and amenity tags that push you up the search results.\n\nPricing strategy is managed with a blend of competitive intelligence and market data. We implement dynamic pricing models that maximise RevPAR without sacrificing occupancy — adjusting rates based on demand patterns, competitor movement and seasonal trends.\n\nReviews are your most powerful marketing asset on OTAs. We implement systematic review solicitation strategies and craft thoughtful, brand-consistent responses to every review — turning guest feedback into a competitive advantage.\n\nThe result is higher visibility, better conversion rates, more direct bookings and a reputation that makes your property the obvious choice in your category and market.",
    stats: [
      { label: "Properties Managed", value: "25+" },
      { label: "Avg. Occupancy Lift", value: "28%" },
      { label: "Reviews Managed", value: "5K+" },
      { label: "Direct Booking Increase", value: "312%" },
    ],
  },

  "event-curation": {
    slug: "event-curation",
    title: "Event Curation",
    tagline: "Brand experiences that move audiences — and the algorithm.",
    description:
      "We conceptualise, plan and execute brand events that generate real-world impact and digital content simultaneously. From intimate launch dinners to large-scale experiential activations, every event is designed to be both lived and shared.",
    deliverables: [
      "Event concept development & creative direction",
      "Venue sourcing, vendor management & logistics",
      "Brand experience design (décor, signage, activations)",
      "Content capture strategy (photo, video, social)",
      "Guest list curation & RSVP management",
      "Post-event content package & performance report",
    ],
    approach:
      "Every event starts with a strategic question: what do we want people to feel, do and share? The answer shapes every decision — from venue selection to the sequence of moments that build toward the emotional peak.\n\nProduction is handled with hospitality-grade precision. We manage every detail — vendors, timelines, contingencies, guest experience flows — so the event feels effortless for your team and unforgettable for your guests.\n\nContent capture is embedded into the event design, not bolted on. We position photographers, videographers and content creators at strategic moments — ensuring you walk away with a library of assets that fuel your social, website and advertising for months.\n\nPost-event, we deliver a full content package and performance report — measuring reach, engagement, press coverage and attendee feedback to quantify the ROI and inform your next activation.",
    stats: [
      { label: "Events Curated", value: "75+" },
      { label: "Combined Reach", value: "8M+" },
      { label: "Avg. Content Pieces", value: "200+" },
      { label: "Client Satisfaction", value: "98%" },
    ],
  },

  "brand-films": {
    slug: "brand-films",
    title: "Brand Films",
    tagline: "Stories that command attention. Films that build legacy.",
    description:
      "High-end visual storytelling that transcends the typical corporate video. We produce cinematic brand films, campaign films and documentary-style content that captures the soul of your brand and earns an emotional response.",
    deliverables: [
      "Creative concept development & scripting",
      "Pre-production (casting, location scouting, storyboarding)",
      "Professional cinematography & direction",
      "Post-production (editing, colour grading, sound design, motion graphics)",
      "Multi-format delivery (hero film, cutdowns, social edits)",
      "Distribution strategy & media placement guidance",
    ],
    approach:
      "A brand film is not a video — it's a strategic asset. We start with your brand's core truth and build a narrative around it. The goal is to create something that audiences choose to watch, not just something they're served in an ad slot.\n\nPre-production is where we earn the film's quality. Detailed scripts, storyboards, shot lists, casting decisions and location scouts ensure that every minute on set is productive and every frame serves the story.\n\nOn set, our directors and cinematographers work with feature-level craft. We shoot on professional cinema cameras, use considered lighting and capture performances that feel genuine — because audiences can spot manufactured emotion instantly.\n\nPost-production is where the film comes alive. Professional editing, cinematic colour grading, sound design and original music transform raw footage into a finished piece that competes with the best content your audience encounters — from any brand, in any category.",
    stats: [
      { label: "Films Produced", value: "45+" },
      { label: "Combined Views", value: "15M+" },
      { label: "Avg. Watch Time", value: "82%" },
      { label: "Awards & Features", value: "12+" },
    ],
  },
};

export const SERVICE_SLUGS = Object.keys(SERVICE_PAGES);
