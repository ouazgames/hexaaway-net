# Read the article HTML content
with open('/home/ubuntu/hexaaway-net/article_content.html', 'r') as f:
    article_html = f.read().strip()

# Create the index.astro file with Hexa Away content
astro_content = '''---
import BaseLayout from '../layouts/BaseLayout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import RatingWidget from '../components/RatingWidget.astro';
import Breadcrumbs from '../components/Breadcrumbs.astro';
import GameIframe from '../components/GameIframe.astro';
import TableOfContents from '../components/TableOfContents.astro';

const breadcrumbItems = [
  { name: 'Home', url: '/' }
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Hexa Away",
  "url": "https://hexaaway.net",
  "logo": "https://hexaaway.net/assets/icons/hexaaway-icon.png",
  "description": "Free online Hexa Away puzzle game - Play the addictive hexagon sliding puzzle game online for free",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Support",
    "url": "https://hexaaway.net/contact"
  }
};

const gameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Hexa Away",
  "description": "Play Hexa Away online for free. A logic puzzle game where you slide hexagon tiles along fixed paths to clear the board. Unblocked and ready to play!",
  "genre": ["Puzzle", "Logic", "Strategy"],
  "gamePlatform": ["Web Browser", "Online"],
  "applicationCategory": "Game",
  "url": "https://hexaaway.net",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "8540"
  },
  "inLanguage": "en"
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Hexa Away Online",
  "url": "https://hexaaway.net",
  "applicationCategory": "Game",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "operatingSystem": "Web Browser"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What kind of game is Hexa Away?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is a logic puzzle game where you slide hexagon tiles along fixed paths to clear the board."
      }
    },
    {
      "@type": "Question",
      "name": "Can I play Hexa Away in my browser?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can play a browser version on supported gaming sites using any modern web browser."
      }
    },
    {
      "@type": "Question",
      "name": "Does Hexa Away work on mobile phones?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It runs on mobile browsers and also has native apps for Android and iOS devices."
      }
    },
    {
      "@type": "Question",
      "name": "Is Hexa Away suitable for kids?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the rules are simple and there is no violent content, making it suitable for most children with guidance."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://hexaaway.net"
    }
  ]
};

const tableOfContents = [
  { id: "what-is", title: "What is Hexa Away?" },
  { id: "how-to-play", title: "How to Play Hexa Away" },
  { id: "controls", title: "Game Controls" },
  { id: "tips", title: "Tips and Strategies" },
  { id: "features", title: "Key Features" },
  { id: "similar", title: "Similar Games" },
  { id: "download", title: "Download Hexa Away" },
  { id: "faq", title: "FAQ" },
  { id: "conclusion", title: "Conclusion" }
];
---

<BaseLayout
  title="Hexa Away - Play Free Online Hexagon Puzzle Game"
  description="Play Hexa Away online for free! A logic puzzle game where you slide colorful hexagon tiles to clear the board. Unblocked and ready to play on hexaaway.net!"
  keywords="hexa away, hexa away game, hexagon puzzle, puzzle game, logic game, brain teaser"
  jsonLd={[organizationSchema, gameSchema, webApplicationSchema, faqSchema, breadcrumbSchema]}
  ogImage="/assets/covers/hexaaway-cover.png"
>
  <Header />
  
  <main id="main-content">
    <div class="container">
      <Breadcrumbs items={breadcrumbItems} />
      
      <article class="game-page">
        <header class="game-header">
          <div class="game-icon">
            <img 
              src="/assets/icons/hexaaway-icon-120.webp" 
              alt="Hexa Away game icon - colorful hexagon tiles with arrows" 
              width="120" 
              height="120" 
              loading="lazy" 
            />
          </div>
          <h1>Hexa Away – Play Free Online Hexagon Puzzle Game</h1>
          
          <div class="game-intro">
            <p><strong>Play Hexa Away online for free</strong> and give your brain a gentle but steady workout. Slide colorful hexagon tiles, clear the board, and solve clever puzzles where every move matters. Each piece can only travel in one direction, so you need to think a few steps ahead before you tap. This version is unblocked and ready to play instantly on hexaaway.net!</p>
          </div>
          
          <div class="rating-section">
            <RatingWidget rating={4.7} ratingCount={8540} gameName="Hexa Away" />
          </div>
        </header>

        <!-- GAME IFRAME SECTION -->
        <section class="game-iframe-section">
          <GameIframe 
            src="https://hexa-away.com/wp-content/uploads/games/uploads/html5/hex-away/"
            title="Play Hexa Away Online"
            description="Click to start playing Hexa Away. Slide hexagon tiles in their designated direction to clear the board. Plan your moves carefully!"
          />
        </section>

        <!-- TABLE OF CONTENTS -->
        <TableOfContents items={tableOfContents} />
        
        <section class="article-content article-spaced">
''' + article_html + '''
        </section>
      </article>
    </div>
  </main>
  
  <Footer />
</BaseLayout>

<style>
/* Article spacing styles */
.article-spaced p {
  margin: 0 0 14px;
  line-height: 1.8;
}

.article-spaced h2,
.article-spaced h3 {
  margin: 28px 0 12px;
  line-height: 1.35;
}

.article-spaced ul,
.article-spaced ol {
  margin: 0 0 16px 20px;
  line-height: 1.8;
}

.game-details {
  list-style: none;
  padding: 0;
  margin: 0;
}

.game-details li {
  margin: 8px 0;
  font-size: 16px;
  line-height: 1.8;
  display: flex;
  align-items: center;
}

.game-details li::before {
  margin-right: 8px;
  font-size: 18px;
  content: attr(data-icon);
}
</style>
'''

# Write the index.astro file
with open('/home/ubuntu/hexaaway-net/src/pages/index.astro', 'w') as f:
    f.write(astro_content)

print("index.astro created successfully")
