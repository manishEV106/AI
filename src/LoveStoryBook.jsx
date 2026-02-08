import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import './LoveStoryBook.css'

function LoveStoryBook({ onBack }) {
  const [currentPage, setCurrentPage] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const bookRef = useRef(null)
  const leftPageRef = useRef(null)
  const rightPageRef = useRef(null)

  const storyPages = [
    {
      id: 1,
      chapter: "Chapter 1",
      title: "The First Spark",
      content: `I remember the first time I saw her — rushing past me like one of the Powerpuff Girls, moving so fast it was like she had somewhere urgent to be, something important to chase. That's when the nickname Blossom popped into my head. It just... fit.

She caught my eye for only a second, but in that single glance, I saw so much. Her eyes sparkled like those of a joyful child — wide, curious, and full of life. Lined with kajal and paired with a small bindi on her forehead, she looked like someone out of a story I hadn't read yet, but already wanted to finish.

I wanted to talk to her — I really did. But I'd never approached a girl in my life. Not once. The fear gripped me tight, like a voice in my head saying, Don't mess this up. So I stayed silent, carrying her image in my mind longer than I should have.

And then… fate stepped in.

On the 7th of April, 2023, I received a message from her on LinkedIn. Out of nowhere. I couldn't believe it. We started talking, first in short bursts, then in longer threads. Soon, we exchanged numbers. WhatsApp became our new world — late-night chats, shared laughs, and goodnight messages that started to mean more than just routine.

Each morning, we unwrapped a little more of each other — but only the best parts. Like we were carefully editing out the flaws, hoping the other wouldn't notice the cracks beneath the surface.

Then one day, while we crossed paths in the parking lot, I mustered the courage to ask her out for a movie. My intentions were simple. I didn't want anything grand. I just wanted to sit beside her for a couple of hours, share a few smiles, maybe laugh at the same scenes.

But she politely turned me down. And I got it. It was too soon. We weren't anything yet — not lovers, not even something close. We were still strangers in the early stages of becoming something… or maybe nothing.

But that moment stuck with me — because even in rejection, I felt something growing. Something real.`,
      illustration: "🌸"
    },
    {
      id: 2,
      chapter: "Chapter 2",
      title: "The Confession",
      content: `I wanted to tell her how much she meant to me — how special she truly was. But the words never came out right. I was still figuring it out, trying to understand feelings I had never fully put into words before.

Then her birthday came.

Our office friends were buzzing with celebration plans, but deep down, she didn't want the noise, the crowd, or the cake photos for Instagram. What she really wanted… was to spend her day with me. Just me.

But I was too blind to see it.

She asked me if I had any plans, and instead of reading between the lines, I kept involving others. I thought I was being thoughtful — maybe she'd feel more comfortable in a group, like she did the day she turned down the movie. I didn't want to make her uncomfortable, so I buried my hopes and went with what I thought was safe.

But safe can be stupid.

She left. And I didn't understand why.

That night stayed with me. Her absence felt heavier than her presence ever had. I realized I was missing something that wasn't even officially mine. And that scared me.

I had already made up my mind: I was going to tell her how I felt. I just didn't know when or how. Until, one evening after work, I asked her if she wanted to grab some snacks. To my surprise, she said yes.

The whole time, my heart was racing. What if she says no? What if she laughs? What if… she slaps me? Yeah, that's how my brain works — overthinking is a curse I know too well. It builds scenarios that never happen but feel real enough to paralyze you.

We sat down, ate a little. I barely tasted the food. My thoughts were louder than the crowd around us. And then, I finally spoke.

"I'm the kind of person who, once attached to someone, never lets go. And… you've become a part of my heart. I really love spending time with you. I want you to be a part of my life."

She paused for a moment — long enough for my breath to catch.

Then she smiled… and said yes.

That moment — right there — was when everything changed. We weren't just friends anymore. That day, without any grand gesture or background music, we chose each other.

And that made it perfect.`,
      illustration: "💖"
    },
    {
      id: 3,
      chapter: "Chapter 3",
      title: "The New Year We Never Forgot",
      content: `New Year's Day.

Most people start the year with resolutions, with fireworks and noise. But I only wanted to start it with her—with the woman who made my life quieter in the most peaceful way. My sister joined us too that day, and I didn't mind. I thought maybe having her around would help us feel more like a family—like the one I quietly dreamed of us becoming.

We decided to visit the ISKCON temple. It wasn't just a visit—it was a tradition for me. I always began my year with Krishna. But this time, it felt different. This time, I wasn't alone. I was with the woman I wanted to share every year with. The future I prayed for sat beside me.

As we sat down and let the chants of Hare Krishna flow through us, a calm settled on my heart. I prayed not for myself, but for her. "Krishna, make her whole. Take away her worries, her fears. Let her smile more this year." She didn't know it then, but in that moment, I gave all my hopes to the deity I trusted most.

After the aarti and prashad, we headed to a nearby lake. The weather was cool, the sunlight gentle, and time felt like it had slowed just for us.

We took photos together. I hesitated to put my arm around her—shyness still wrapped around me like a shield—but my sister laughed and teased, "It's like you two are meeting for the first time!"

Emboldened, I rested my hand on her shoulder. It wasn't our first photo together, but something about it felt… complete. Like a married couple already caught in the rhythm of a shared life. I could feel it in the way she cared for my sister, looked out for us both. She wasn't just my partner—she was already someone I could call home.

Afterward, we went for lunch, shared food and laughter, and for a little while, everything felt so wonderfully normal. I still remember that pink helmet she bought—the one I helped her choose. And her smile... God, that smile. It made me want to sing "When She Smiles" by the Backstreet Boys right there on the street.

She often told me, "You're blind. You never see beauty."

And I always replied, "Maybe I am. But if this is blindness, let me stay blind forever. Because from where I stand, you are beauty."

At one point, her jacket chain broke, and underneath she wore a pink suit—not nearly warm enough for the cold. Without thinking, I took off my jacket and gave it to her.

She hesitated, "Aapko thand lagegi." I smiled and lied, "Don't worry, I'm wearing an inner."

Truthfully, the chill hit harder when I started driving the two-wheeler again. The wind cut through me, and soon, my sister—who was sitting behind me—noticed me shivering. Quietly, she leaned forward and hugged me, trying to warm me up.

That moment meant something too—a sibling's love, unspoken but deep.

Eventually, the day started to fade. We had to say goodbye—again. She returned my jacket, thanked me softly, and we hugged. Just a small side hug, but enough to carry warmth through the evening.

My sister and I reached home before dark. The ride back was quiet, the kind that leaves space for memories to settle in.

And with that, another chapter closed—another beautiful day etched into the story of us.`,
      illustration: "🎆"
    },
    {
      id: 4,
      chapter: "Chapter 4",
      title: "Rajma, Roads, and Real Feelings",
      content: `It was the beginning of our love story — a journey that started with innocence, with nervous laughter, and two hearts slowly opening up to something unknown.

I wasn't the romantic kind. I was quiet, sober, someone who didn't really understand love the way movies showed it. But she — she was full of life. She once told me, "I'll spoil you in the best way." And I smiled, not knowing how deeply that would turn out to be true.

It was our first ride together.

She had made rajma chawal for me. Yes, she cooked it herself. I still remember how lovingly she handed it over, packed with care, as if every grain of rice carried a piece of her heart. That moment — simple yet intimate — told me I was getting too attached. And when I love, I lose myself. I love someone more than I love myself. My mother knows this about me too well. That's why, when she sensed something blooming between us, she asked to speak with her.

At that day, my mother called me and said I want to speak with her. She asked her, "Do you truly love my son?" She replied, "Yes, aunty, I do." Then my mother, in her gentle but firm voice, said, "Bas… uska dil mat todna." And she promised, "Nahi aunty ji, aisa kabhi nahi hoga."

After that, she looked at me, curious and thoughtful. "Why did your mom say that?" I didn't answer immediately. We had just parked across the street, the car engine humming softly as the AC blew cool air inside. I opened the box and started eating the rajma chawal she'd made.

She had prepared it at her sister's PG. I remember she called her sister before we met. "Masale kam the PG mein," she laughed, a little embarrassed. But I didn't care. Even though I'm someone who craves spicy food, that day, I savored every bite. Not for the taste — but for her effort. For her.

When I finished eating, she asked me again, more softly this time, "What happened in your past?" She wanted to understand the reason behind my mother's words. Behind my cautious heart.

I hesitated.

Telling someone about your past is like reopening an old wound. Slowly, painfully.

I began to talk about my ex — about how she left, how she betrayed my trust, how she made me feel worthless. My voice trembled. My eyes filled with tears as memories I had buried clawed their way back.

She watched me — not just listening, but feeling every word I said.

Then, silently, she reached forward and placed her hand gently on my face. Her fingers wiped my tears — not just from my cheeks, but from my soul. In that moment, I realized: I was scared of attachments, and yet here I was — already attached. Maybe Lord Krishna had planned this too. Maybe He wanted this bond for me.

It was getting late. I had to be home before dusk. My mother had asked me to bring pots for her garden. So, we headed out again — two lovers hunting for garden pots and a plant my mom had mentioned.

After a bit of searching, we finally found what we needed.

Now came the hardest part — saying goodbye.

I drove her to her sister's PG. As we reached, she didn't get out immediately. She just sat there, staring at me. Her eyes held a thousand words. And then she said it: "I will never leave you. She was your past — let her stay there. I'm your present… and your future."

She leaned forward, hugged me tight, and kissed me on the cheek.

Time stopped.

My heart pounded like a drum in a quiet room. I wanted to kiss her back — not just as a gesture, but as a promise. I looked around, checked the road, saw no one… and gently kissed her on the cheek.

That moment — that single moment — was magic. A soft kiss on a quiet road. A memory that etched itself into the deepest corner of my heart.

I could have stayed in that feeling forever.

But reality called. My mom was waiting at home. With a heavy heart, I said goodbye. I watched her walk away, a part of me wanting to go back in time and freeze that evening.

Some memories are not just meant to be remembered — they're meant to be lived again and again in the heart.

And this was one of them.`,
      illustration: "🍛"
    },
    {
      id: 5,
      chapter: "Chapter 5",
      title: "The Night I Slept With Lord Krishna",
      content: `I still remember the day I met her friend's boyfriend. He had come to return her girlfriend's things — and end everything between them. The air felt heavy, like we were witnesses to something bigger than just a breakup. We were standing there, not as friends or outsiders, but as silent receivers of heartbreak.

He looked at me, eyes filled with something deeper than sadness — it was the kind of pain that makes you pause. Then he asked quietly, "Are you from the same caste?"

I shook my head. He gave a dry, knowing laugh and said, "Be prepared, brother. You're about to go through hell."

She was standing beside me. She heard him too. And she answered without hesitation, "Aisa kuch nahi hoga. I'll convince my parents. I promise."

I wanted to believe her. I told myself she could do anything — she was strong, fierce, the kind of girl who reminded me of the Powerpuff Girls: full of energy, light, and fight. But my mind... it never stopped spinning.

The overthinking crept in like a shadow — whispering "What ifs" and feeding my fears. What if he was right? What if love wasn't enough? Still, I forced myself to believe: She'll fight for us. I have to be strong too. I'll handle my side. She'll handle hers. That was the silent pact we made — or at least, the one I held onto.

She opened up to me, her voice trembling as she shared the truth — the condition of her body, the weight of her world. And in that moment, I went blank. It was as if time stopped and my entire life rewound and played in slow motion. I didn't know who to talk to. I didn't know what to say.

But those eyes — her crying eyes — I still can't forget them. They stayed with me that whole day, haunting my mind while I rode my Activa through the narrow lanes of the city. There was a strange heaviness in the air, like a silent storm inside me.

I've always believed that Lord Krishna rides with me on the back seat. So that day, I asked him, "What should I do?" He didn't answer me directly. Instead, He gently asked, "Where does your happiness lie?" The answer was clear. With her. But knowing the answer didn't make the situation any easier — the real challenge was convincing my parents.

That night, I reached home around 9 PM, nervous and unsure. My heart thudded as I sat across from my mother. Somehow, I gathered the courage to tell her about her — about the girl I loved, and her situation. My mother's reaction was fierce. She was angry, scared even. "You will not talk to her anymore," she declared. I understood her fear. The world isn't always kind, and a mother knows this better than anyone. But I was hopelessly in love. I couldn't just walk away.

From that day onward, it became a silent war. My mother would snatch my phone every time I came home. That's why I sometimes missed sending those goodnight messages. Not because I didn't care — but because I didn't have my phone. Still, I tried. I knew how much that one message meant, how it felt to receive it when your whole day was heavy.

One day, I told my mother I'd be late. She asked, "Why?" I said I was meeting a friend. She knew I was lying. She knew I was with her. But how could I explain to my mother that time with her was my peace, my real smile, my happiness? That evening, we both were happy. The hours flew by like seconds. We hugged — not a proper one, just a side hug — but even that felt like the world had paused for us.

When I got home, it was 9 PM again. I found the gate locked. I called my sister. She picked up, but I heard my mom on the other side of the line. "Wherever he was, tell him to stay there. Let her keep him in her house," she said, and hung up.

I waited outside, hoping the door would eventually open. But after a while, the lights went out. They had gone to sleep. I believed — they wouldn't open the door before 2 to 3 hours. My hopes began to fade.

I called again. No one answered.

It was midnight. I was tired and drained — yet there was a strange peace inside me. My phone buzzed. A goodnight message from her. I smiled, replied, and didn't tell her a thing. I didn't want her to worry.

Now, I needed a place to stay. I called an old childhood friend, but he was out of town. The only option left was a hotel. I got back on my scooter, my companion in all these battles, and headed off.

Then, in the rearview mirror, with the house lights off, I saw someone watching me. It was my sister. Tears welled up in my eyes. Her silent support in that moment… I can't describe what it meant.

I continued on, hoping to find a hotel room. But then reality hit me: to check in, I needed my Aadhaar card. And of course, I didn't have my wallet. Now every door seemed closed. Just me and the road. Just me and Lord Krishna. I looked up and asked, "Is this the test you meant, Lord?" He smiled, in that mischievous, loving way of His, and whispered back, "Love is not about what you get… it's about what you sacrifice."

Suddenly, my phone rang. It was my sister. "Where are you, bhai? Come home," she said softly. I didn't reply much. I had no energy left. My back ached, my eyes were swollen with sleep. I just said, "Aaya behen."

At 2 AM, the gate opened. She served me food, and I finally slept — on a full stomach, with a full heart.

The next day at the office, I was barely able to keep my eyes open. Dizzy, exhausted. She came to my bench and noticed. "Sooye nahi kya puri raat?" she asked, gently. I smiled and replied, "Haan, kya karoon… neend churayi kisne… oh sanam tune." She laughed. That laugh made everything worth it.

"Sach batau, kya kar rahe the puri raat?" she asked again, curious. I didn't want her to worry. So I lied. "Client ke saath freelancing kar raha tha… kaafi late tak chala gaya." She believed me. And I knew I had protected her heart from something she didn't need to carry.

Days passed. Slowly, my parents began to see. They realized this wasn't a phase, this wasn't a distraction — I was madly in love with her.

Eventually, they accepted it.

And that was the beginning of a new story.`,
      illustration: "🌙"
    },
    {
      id: 6,
      chapter: "Chapter 6",
      title: "The Light That Stayed Green",
      content: `It was one of those days when silence says more than words ever could.

Since morning, I had noticed something was different about her. The usual sparkle in her eyes had dulled, the warmth in her voice was distant, and though she smiled, it never reached her soul. I kept watching her, my heart quietly aching. I asked her more times than I could count, gently, playfully, even silently through my gaze—but she didn't tell me what was wrong.

There's a kind of helplessness that grips you when the person you love is hurting and you can't fix it. It weighs heavy, like a storm hovering just above your head, waiting to break.

Evening came, and as always, we left together. It had become a ritual—our shared time, no matter how the day unfolded. That evening felt different though. There was something in the air, a kind of pause before a truth.

We stopped at a red light, the world buzzing around us, and suddenly she turned to me. Her voice was soft, almost trembling.

"We're running from reality," she said, her eyes holding something between fear and hope.

That's when she told me: "Do you think your mom will accept me as I am?"

For a moment, time stood still. The traffic light glowed red, but inside me, something green bloomed—calm and ready. Because I had been waiting for this moment.

I looked at her, the woman who had carried this fear alone, and I said, "I already told my mom about your condition."

Her eyes widened. Confusion danced with disbelief. And then came the smile—the real one. The kind that lit up everything around her. There was no grand celebration, no fireworks. Just a single, powerful emotion: relief.

She was confused, yes. But also happy. And in that moment, that's all that mattered. Happiness. Her happiness.

As always, when the road diverged and we had to part ways, we whispered our ritual, "I love you." We said it that day too—maybe with a little more meaning, a little more weight.

And as I walked away, a quiet joy settled in me. Because that day, I gave her what she truly deserved.

Happiness.`,
      illustration: "🚦"
    }
  ]

  const totalPages = Math.ceil(storyPages.length / 2)

  useEffect(() => {
    if (bookRef.current) {
      gsap.set(bookRef.current, { transformStyle: 'preserve-3d' })
    }
  }, [])

  useEffect(() => {
    // Reset scroll position when page changes
    if (leftPageRef.current) {
      leftPageRef.current.scrollTop = 0
    }
    if (rightPageRef.current) {
      rightPageRef.current.scrollTop = 0
    }
  }, [currentPage])

  const nextPage = () => {
    if (currentPage < totalPages - 1 && !isFlipping) {
      setIsFlipping(true)
      
      const tl = gsap.timeline({
        onComplete: () => {
          setCurrentPage(prev => prev + 1)
          setIsFlipping(false)
        }
      })
      
      tl.to(bookRef.current, {
        rotationY: -15,
        duration: 0.5,
        ease: 'power2.out'
      })
      .to([leftPageRef.current, rightPageRef.current], {
        opacity: 0,
        scale: 0.95,
        duration: 0.4,
        ease: 'power2.in'
      }, '-=0.2')
      .to(bookRef.current, {
        rotationY: 0,
        duration: 0.5,
        ease: 'power2.in'
      })
      .to([leftPageRef.current, rightPageRef.current], {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out'
      }, '-=0.3')
    }
  }

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true)
      
      const tl = gsap.timeline({
        onComplete: () => {
          setCurrentPage(prev => prev - 1)
          setIsFlipping(false)
        }
      })
      
      tl.to(bookRef.current, {
        rotationY: 15,
        duration: 0.5,
        ease: 'power2.out'
      })
      .to([leftPageRef.current, rightPageRef.current], {
        opacity: 0,
        scale: 0.95,
        duration: 0.4,
        ease: 'power2.in'
      }, '-=0.2')
      .to(bookRef.current, {
        rotationY: 0,
        duration: 0.5,
        ease: 'power2.in'
      })
      .to([leftPageRef.current, rightPageRef.current], {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out'
      }, '-=0.3')
    }
  }

  const leftStory = storyPages[currentPage * 2]
  const rightStory = storyPages[currentPage * 2 + 1]

  return (
    <div className="lovestory-container">
      <div className="floating-love-bg">
        <span className="float-element">📖</span>
        <span className="float-element">💕</span>
        <span className="float-element">✨</span>
        <span className="float-element">💝</span>
        <span className="float-element">📚</span>
      </div>

      <div className="story-header">
        <button className="back-btn" onClick={onBack}>
          ← Back to Home
        </button>
        <h1 className="story-title">Our Love Story 📖</h1>
        <p className="story-subtitle">A tale written in the stars, lived in our hearts</p>
      </div>

      <div className="story-book-wrapper">
        <div className="story-book" ref={bookRef}>
          <div className="story-page left-story-page" ref={leftPageRef}>
            {leftStory ? (
              <div className="page-content">
                <div className="story-illustration">{leftStory.illustration}</div>
                <div className="chapter-label">{leftStory.chapter}</div>
                <h2 className="story-chapter-title">{leftStory.title}</h2>
                <div className="story-text">
                  {leftStory.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <div className="page-number">{currentPage * 2 + 1}</div>
              </div>
            ) : (
              <div className="page-content cover-page">
                <div className="cover-decoration">✨</div>
                <h1 className="cover-title">Our<br/>Love Story</h1>
                <div className="cover-hearts">
                  <span>💕</span>
                  <span>💖</span>
                  <span>💕</span>
                </div>
                <p className="cover-subtitle">A journey of two hearts<br/>beating as one</p>
                <div className="cover-decoration bottom">✨</div>
              </div>
            )}
          </div>

          <div className="story-spine"></div>

          <div className="story-page right-story-page" ref={rightPageRef}>
            {rightStory && (
              <div className="page-content">
                <div className="story-illustration">{rightStory.illustration}</div>
                <div className="chapter-label">{rightStory.chapter}</div>
                <h2 className="story-chapter-title">{rightStory.title}</h2>
                <div className="story-text">
                  {rightStory.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <div className="page-number">{currentPage * 2 + 2}</div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="story-navigation">
        <button 
          className="nav-arrow prev-arrow" 
          onClick={prevPage}
          disabled={currentPage === 0 || isFlipping}
        >
          ← Previous
        </button>
        
        <div className="page-indicator">
          <span className="current-page">{currentPage + 1}</span>
          <span className="page-separator">/</span>
          <span className="total-pages">{totalPages}</span>
        </div>

        <button 
          className="nav-arrow next-arrow" 
          onClick={nextPage}
          disabled={currentPage === totalPages - 1 || isFlipping}
        >
          {currentPage === totalPages - 1 ? 'More Coming Soon... 💕' : 'Next →'}
        </button>
      </div>

      <div className="story-footer">
        <p>📖 Turn the pages of our beautiful journey together 💕</p>
      </div>
    </div>
  )
}

export default LoveStoryBook
