---
title: 'New Eras: Development Log and Reflections (1)'
description: 'I want this to be my Hello, World!'
pubDate: '2026-09-09'
theme: 'feature'
eyebrow: 'New Eras'
displayTitle:
  - 'New Eras'
  - 'Development Log & Reflections (1)'
lang: 'en'
translationKey: 'new-eras-development-log-1'
---

To be honest, I never thought I would make a game. I did not believe I was capable of it. There was no way I could complete the entire process of making a game. I could not code, could not make art, knew nothing about music theory—I knew none of it. How could I possibly make a game? I truly love games, but the reality is that passion alone cannot become the spear that carries me through every obstacle.

I am already 22. I have never studied game development systematically. I would need to learn a game engine, a programming language, mathematical logic, the basics of art, music production... and how to solve every kind of problem that comes up during development. That process is necessary. It is a genuinely good challenge. But I cannot afford it. More precisely, I cannot afford the cost of trying and failing. It would take an enormous amount of time, and I cannot stay home full-time, learning and building without producing any income along the way. Unfortunately, I need my income from work to help cover my family's living expenses. So sometimes I make fun of myself and think of that line from a movie: Why isn't my dad Li Ka-shing?

From what I found online, several well-known solo-developed games took a very long time to make: *Stardew Valley* took 4.5 years, and *Animal Well* took roughly 7 years by the time it officially launched. Making a game alone is not easy. Good games need time to be polished, followed by continuous maintenance and updates. Passion alone cannot do all of that.

But without passion and a love for games, how could anyone make a good game in the first place?

“Nothing in the world is difficult for one who is willing to climb.” Some questions will never have an answer unless you try. Some things are worth doing even if you fail. When I am old, sitting in a rocking chair, I will be able to tell the younger members of my family that story. As long as I am willing to do it, it means something. As long as I keep learning from it, what I enjoy is not the ending, but the process.

I want this to be my `Hello, World!`.

---

This is how it began. In a gaming community, I saw someone say: “90% of indie games die at launch, and the indie games we know are the top 1% of the remaining 10%.” That made me curious about where games like *Stardew Valley*—the kind I enjoy—actually stand in the market. So I asked ChatGPT:

“Is there still a market for indie pixel-art management sims, or is it already overcrowded?”

GPT told me:

![ChatGPT's analysis of the indie game market; original conversation in Chinese](assets/new-eras-devlog-1/02-market-analysis.png)

I felt I had found my answer. Whether a game has a market depends on whether its mechanics feel fresh and whether it is actually fun. An indie game does not succeed or fail simply because “there is still a market for this genre.” What matters more is whether you give players a reason to choose your game instead of an established benchmark—and whether that reason turns out to be genuinely fun. Innovation matters, but that does not mean inventing a form of play no human has ever seen before. *Fields of Mistria* is a good example. Farming, fishing, mining, festivals—*Stardew Valley* had already done all of those things. Yet *Fields of Mistria* could still succeed, because players did not experience it as “another Stardew Valley reskin.”

The real danger is not “failing to innovate.” It is having no reason to exist.

So when people say that “ordinary pixel-art management sims are overcrowded,” it does not mean nobody should make them. It means you should not make one that gives players no reason to leave the classics they already have.

That judgment gave me something to think about.

Then GPT showed me another side of the game market:

![ChatGPT's analysis of a game's core appeal; original conversation in Chinese](assets/new-eras-devlog-1/03-hook-analysis.png)

What it said next caught me off guard:

![ChatGPT's proposal for a pixel-art management game; original conversation in Chinese](assets/new-eras-devlog-1/04-cozy-farming-outline.png)

![A proposed core gameplay loop; original conversation in Chinese](assets/new-eras-devlog-1/05-core-loop-outline.png)

![Ideas for the game world and its features; original conversation in Chinese](assets/new-eras-devlog-1/06-world-features.png)

![An estimate of the game's scope and development time; original conversation in Chinese](assets/new-eras-devlog-1/07-scope-estimate.png)

![The idea of NPCs with long-term memory; original conversation in Chinese](assets/new-eras-devlog-1/08-living-npc-vision.png)

I had no idea what it was trying to do. It was like a product manager with no concept of a budget, constantly piling more complicated systems onto the proposal: long-term memory, dynamic relationships, social structures, personality evolution, and huge numbers of NPCs controlled by AI.

Those mechanics did sound interesting, but they were clearly beyond the scope of a solo developer. At least for me, I did not think I could make them.

But it genuinely seemed to believe the whole thing was feasible—and that it could be compressed into an indie game:

![ChatGPT's response about the scope of the project; original conversation in Chinese](assets/new-eras-devlog-1/10-scope-response.png)

![A simulation code example produced by ChatGPT; original conversation in Chinese](assets/new-eras-devlog-1/11-simulation-code-example.png)

GPT really thought its design was feasible:

![A proposed NPC behavior system; original conversation in Chinese](assets/new-eras-devlog-1/16-npc-behavior.png)

![A proposed AI and resolution system; original conversation in Chinese](assets/new-eras-devlog-1/17-ai-settlement.png)

And through that entire conversation, it never noticed a problem. It just kept going. The question was not only whether the game could be built. If a huge number of characters needed to be controlled continuously by AI, where would all that inference run? Why should players have to remain online? Who would pay the long-term token costs?

So I pushed it further:

![Asking how low-cost AI inference could be provided; original conversation in Chinese](assets/new-eras-devlog-1/18-cheap-ai-question.png)

It suggested local models, rules-based simulation, layered scheduling, and other approaches. Most of them did not directly solve my problem.

I still had not found the idea I was looking for. What finally sparked something was this:

![The simulation promotion mechanism; original conversation in Chinese](assets/new-eras-devlog-1/22-simulation-promotion.png)

![The core idea behind an AI-driven world; original conversation in Chinese](assets/new-eras-devlog-1/23-ai-world-design.png)

GPT had said a great deal and designed a great deal, but it still had not produced a workable game concept. It also assumed that I was determined to make a game. I had never told it that.

But it made me realize something: if a game could be combined with AI, then whatever you did to a character could shape how that character eventually repaid you. Treat someone badly, and they might take revenge—or repay cruelty with kindness. Treat someone well, and they might be grateful—or betray you, forget what you did, and answer kindness with malice.

Then my thinking went one step further: what if that mechanic were combined with *RimWorld*? Suppose someone arrived at your colony and you removed one of his legs. Could he later return, wearing a prosthetic, as part of a force attacking the colony?

That was the moment the idea appeared. One word came to mind: karma.

What if the core mechanic of the game were “karmic reckoning”...

![Proposing karmic reckoning as the central idea; original conversation in Chinese](assets/new-eras-devlog-1/24-causal-settlement-idea.png)

GPT agreed with my judgment—of course it did. That tendency is a double-edged sword: agreeing with the user can make them feel confident, but it can also pull them into a “delusion spiral.”

![ChatGPT's response to the karmic reckoning idea; original conversation in Chinese](assets/new-eras-devlog-1/25-causal-system-response.png)

That was when I first had the idea of making a game myself.

![Deciding to begin making the game; original conversation in Chinese](assets/new-eras-devlog-1/27-decision-to-build.png)

Now that I had the idea, there was no point waiting. I quickly sketched out the flow of the entire game:

![The first draft of the game's overall flow; original conversation in Chinese](assets/new-eras-devlog-1/28-game-flow-draft.png)

![Asking whether the project could fit a time-limited game challenge; original conversation in Chinese](assets/new-eras-devlog-1/29-challenge-question.png)

![Scoping the project for the time-limited challenge; original conversation in Chinese](assets/new-eras-devlog-1/30-challenge-scope-answer.png)

Before long, GPT produced the first GDD:

[Download the first GDD (DOCX)](/downloads/new-eras-gdd-v0.1.docx)

With the GDD in place, the technical stack was set: Godot + GDScript + Codex + Git. But I understood none of the technical side. I asked other AIs, and they all told me it would be completely fine, so for the moment I chose to trust that stack. The working title was FINAL COORDINATES. But it did not roll off the tongue like RimWorld, so I came up with “New Eras.” GPT told me it would be more conventional not to add the “s” to “Era.” I ignored it. This was my explanation:

![Why I chose the name New Eras; original conversation in Chinese](assets/new-eras-devlog-1/31-name-explanation.png)

Everything was ready. The environment was configured. The first step of the game began:

![Codex's first development plan; original conversation in Chinese](assets/new-eras-devlog-1/32-codex-plan.png)

![The first code implementation; original conversation in Chinese](assets/new-eras-devlog-1/33-first-code.png)

That first question was based on a number that looked precise, had almost no confidence behind it, and came from something a random user had tossed out in a gaming community. I asked it at 21:31 on September 2. At the time, I was not planning to make a game; I was simply curious about the market. The game's real first milestone landed at 02:11 on September 3. In 4 hours and 40 minutes, curiosity became action, and the desire to make a game—to keep making this game—caught fire.

I will give this game 200% of my passion, whether or not it succeeds. I will stick with it, 100%. There is no end. Its chance of success is 50%. If that number ever reaches 0%, then life has finally beaten me down.

---

It is midnight on September 9. One week has passed. I have gone from milestone M0 to M15. All I can really say is that the little characters in the game can move around, and that I have added a few necessary systems. In reality, it is still a half-finished version of a half-finished game. Right now, it looks like this:

![The New Eras prototype after one week of development](assets/new-eras-devlog-1/34-week-one-prototype.png)

I have started learning Aseprite and pixel art, but I do not think I have much talent for drawing. I know what an object is supposed to look like; I simply cannot draw it.

And then there is music, where I know even less.

If this game is ever going to launch—if I am going to produce a Demo that players can actually try—it seems I really may need AI to help generate art and music assets. At least during the prototype stage, I may need AI-generated temporary art and music. I still do not know what the final version will use.

What I can guarantee is this: how the game plays, how it is designed, which features and items it includes, whether it has its own custom culture, what the finished game looks like, and every piece of writing in it. I will not use AI for the prose or the story. Whatever AI generates never reads as if a person wrote it. I never planned to use AI for that anyway. Among all these unfamiliar fields, writing is the one thing I do best, and the one part of making this game that gives me a genuine sense of personal involvement. How could I give it up so easily?

I have to admit that the arrival of Agents has changed things for many people. I used to drift off during class, with all kinds of interesting ideas appearing in my head. But autonomous Agents did not exist back then, and now I feel that many of those ideas and designs were buried by the times (laughs). AI and Agents have genuinely given people like me—people with too many ideas who get stuck at the technical barrier—a chance. In the past, many things remained nothing more than thoughts, ending with “I don't know how.” Now I can add one more sentence after that: “But we can let AI try.”

I also signed up for TapTap Spotlight's 21-day game creation challenge. There is a lot of prize money, but that does not matter much to me. I said I enjoy the process, and having to produce something within a limited amount of time is exactly the kind of challenge that can train me to design and deliver a prototype. There are not many opportunities in life that you can actually seize. I will tell myself: let us wait and see.

The road ahead is long and has no ending; I will search high and low.

September 9, 2026. Penned by **L**in**X**in.
