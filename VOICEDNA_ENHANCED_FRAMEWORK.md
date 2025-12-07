# VoiceDNA Enhanced Framework Specification

## Voice DNA + Reach DNA: Algorithm-Aligned Voice Extraction

**Version**: 1.0
**Date**: December 2024
**Status**: Planning Phase

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Current Framework Overview](#current-framework-overview)
3. [The Algorithm Insight](#the-algorithm-insight)
4. [Enhanced Framework Architecture](#enhanced-framework-architecture)
5. [Twitter/X Deep Dive: Algorithm Mechanics](#twitterx-deep-dive-algorithm-mechanics)
6. [New Metrics Specification](#new-metrics-specification)
7. [Enhanced Deliverables](#enhanced-deliverables)
8. [Implementation Roadmap](#implementation-roadmap)
9. [Future Platform Expansion](#future-platform-expansion)
10. [Appendix: Raw Algorithm Data](#appendix-raw-algorithm-data)

---

## Executive Summary

### The Opportunity

VoiceDNA currently extracts **linguistic voice patterns** — how someone sounds. But platform algorithms don't just reward good writing; they reward specific **structural and behavioral patterns** that most creators don't understand.

Twitter/X is the only major platform to open-source its recommendation algorithm. This gives us unprecedented insight into exactly what drives reach and virality.

### The Enhancement

We propose adding three new extraction layers to VoiceDNA:

1. **Structural Patterns** — Thread architecture, hook formulas, media integration
2. **Engagement Behavior** — Reply patterns, conversation dynamics, timing
3. **Algorithm Alignment** — How well natural voice aligns with platform mechanics

### The Value Proposition

**Before**: "Your voice, extracted and quantified"
**After**: "Your voice, optimized for both humans AND algorithms"

This positions VoiceDNA as the only voice extraction service that understands platform dynamics — a significant competitive moat.

---

## Current Framework Overview

### Existing Voice DNA Metrics (40+ per channel)

| Category | Metrics |
|----------|---------|
| **Rhythm** | Sentence length, paragraph structure, pacing |
| **Vocabulary** | Word choice, complexity, jargon usage |
| **Tone** | Formality spectrum, contraction rate, directness |
| **Signature Elements** | Catchphrases, recurring patterns, unique expressions |
| **Engagement Style** | Question frequency, call-to-action patterns |
| **Consistency** | Voice stability across content pieces |

### Current Deliverables

1. **Master Voice Persona (MVP)** — Core identity across 200+ metrics
2. **Channel Voice Profiles** — Platform-specific adaptations
3. **AI Prompts** — Ready-to-use prompts for ChatGPT/Claude
4. **Validation Checklist** — Quality assurance framework

### Current Pricing

- Foundation: $500 (1 channel)
- Multi-Channel: $1,200 (3 channels)
- Complete System: $2,500 (6 channels)

---

## The Algorithm Insight

### Why This Matters

Content reach is determined by two factors:

1. **Quality** — Does the content resonate with humans?
2. **Algorithm Alignment** — Does the content structure match what the platform rewards?

Most creators optimize for #1 and ignore #2. VoiceDNA can extract patterns for both.

### The Twitter/X Open Source Revelation

In April 2023, Elon Musk open-sourced the Twitter recommendation algorithm. Key repositories:

- `twitter/the-algorithm` — Main recommendation system
- `twitter/the-algorithm-ml` — Machine learning components

This revealed exact weights, scoring formulas, and ranking factors that were previously unknown.

### Key Insight

**Replies are worth 27x more than retweets in the algorithm.**

Most creators optimize for likes and retweets. The algorithm actually rewards conversation. This single insight can dramatically change content strategy — and VoiceDNA can extract whether someone's natural voice is conversation-generating or not.

---

## Enhanced Framework Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                      VOICEDNA ENHANCED FRAMEWORK                        │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ╔═══════════════════════════════════════════════════════════════════╗  │
│  ║  LAYER 1: LINGUISTIC VOICE (Current - 40+ metrics)                ║  │
│  ╠═══════════════════════════════════════════════════════════════════╣  │
│  ║  • Sentence structure, rhythm, vocabulary                         ║  │
│  ║  • Tone markers, formality spectrum                               ║  │
│  ║  • Signature phrases, unique expressions                          ║  │
│  ║  • Contraction patterns, punctuation style                        ║  │
│  ╚═══════════════════════════════════════════════════════════════════╝  │
│                                                                         │
│  ╔═══════════════════════════════════════════════════════════════════╗  │
│  ║  LAYER 2: STRUCTURAL PATTERNS (New - 15+ metrics)                 ║  │
│  ╠═══════════════════════════════════════════════════════════════════╣  │
│  ║  • Thread architecture (length, pacing, reveal timing)            ║  │
│  ║  • Hook formulas (first 7 words, opener types)                    ║  │
│  ║  • Media integration patterns (when, what type, placement)        ║  │
│  ║  • Call-to-action structures                                      ║  │
│  ║  • Link placement behavior                                        ║  │
│  ║  • Hashtag usage patterns                                         ║  │
│  ╚═══════════════════════════════════════════════════════════════════╝  │
│                                                                         │
│  ╔═══════════════════════════════════════════════════════════════════╗  │
│  ║  LAYER 3: ENGAGEMENT BEHAVIOR (New - 12+ metrics)                 ║  │
│  ╠═══════════════════════════════════════════════════════════════════╣  │
│  ║  • Reply velocity (how fast they respond to comments)             ║  │
│  ║  • Reply depth (how many exchanges per thread)                    ║  │
│  ║  • Self-reply patterns (extending own threads)                    ║  │
│  ║  • Quote tweet vs retweet ratio                                   ║  │
│  ║  • Community interaction style                                    ║  │
│  ║  • Conversation seeding techniques                                ║  │
│  ║  • Engagement timing patterns                                     ║  │
│  ╚═══════════════════════════════════════════════════════════════════╝  │
│                                                                         │
│  ╔═══════════════════════════════════════════════════════════════════╗  │
│  ║  LAYER 4: ALGORITHM ALIGNMENT (New - Twitter-specific)            ║  │
│  ╠═══════════════════════════════════════════════════════════════════╣  │
│  ║  • Overall alignment score (0-100)                                ║  │
│  ║  • Tweepcred factors (reputation signals)                         ║  │
│  ║  • Natural strengths (what already works)                         ║  │
│  ║  • Friction points (voice vs algorithm conflicts)                 ║  │
│  ║  • Minimal-change optimization opportunities                      ║  │
│  ║  • Risk factors (potential penalties)                             ║  │
│  ╚═══════════════════════════════════════════════════════════════════╝  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Twitter/X Deep Dive: Algorithm Mechanics

### Scoring Weights (From Source Code)

The algorithm calculates engagement probability and multiplies by these weights:

| Action | Weight | Relative Value | Strategic Implication |
|--------|--------|----------------|----------------------|
| Reply to your reply | **75.0x** | 150 retweets | Engage with your commenters |
| Reply | **13.5x** | 27 retweets | Create reply-worthy content |
| Good profile click | **12.0x** | 24 retweets | Intrigue drives discovery |
| Good click (dwell >2min) | **11.0x** | 22 retweets | Longer content = more weight |
| Good click v2 | **10.0x** | 20 retweets | Quality engagement signal |
| Retweet | **1.0x** | Baseline | Less valuable than expected |
| Like (Favorite) | **0.5x** | Half a retweet | Weakest positive signal |
| Negative feedback | **-74.0x** | Devastating | Avoid "not interested" clicks |
| Report | **-369.0x** | Account killer | Never trigger reports |

### Tweepcred: The Reputation System

Twitter uses a PageRank-style reputation algorithm called "Tweepcred":

```
Your Reputation = f(reputation of accounts that engage with you)
```

**How it works:**
- High-reputation accounts engaging with you → Your reputation increases
- Low-reputation accounts engaging with you → Your reputation decreases
- Accounts under "Show additional replies" = low reputation
- Engaging with them actively hurts your reach

**Reputation Factors:**

| Factor | Impact |
|--------|--------|
| Follower/Following Ratio | Following >> Followers = reputation penalty |
| Account Age | Full reputation after 30+ days |
| Verification Status | Blue check = fixed score of 100 |
| Engagement Quality | Who engages with you matters |
| Historical Behavior | Past violations persist |

### Content Penalties

| Penalty | Severity | How to Avoid |
|---------|----------|--------------|
| **External Links** | Moderate | Put links in replies, not main post |
| **Multiple Hashtags** | 40% reach reduction | Use 1-2 max |
| **Misspellings/Unknown Words** | 95% penalty | Proofread carefully |
| **Blacklisted Topics** | Variable | Use judgment (list not public) |
| **Toxicity Detection** | Variable | ML detects tone — don't be aggressive |
| **NSFW Content** | Severe | Flagged automatically |
| **Following Too Many** | Reputation hit | Keep ratio healthy |
| **Unfollowing Too Fast** | Reputation hit | Gradual changes only |

### Content Boosts

| Boost | Magnitude | How to Leverage |
|-------|-----------|-----------------|
| **Video Content** | 2x+ | Algorithm heavily prioritizes video |
| **Images/GIFs** | 2x | Visual content outperforms text |
| **Trending Topics** | Significant | Check explore page, join conversations |
| **Author Reply to Comments** | 150x effective | Reply to every comment in first 30min |
| **Thoughtful Replies** | Reputation boost | Quality replies > quantity |
| **Dwell Time** | Cumulative | Longer content = more time = more boost |
| **Twitter Blue** | 4x in-network, 2x out | Verification provides multiplier |

### The Engagement Velocity Factor

**First hour = ~50% of total score**

The algorithm heavily weights early engagement. A post that gets 100 replies in the first hour will dramatically outperform one that gets 100 replies over 24 hours.

**Implications:**
- Post when your audience is most active
- Engage immediately with early commenters
- Seed conversation in first 30 minutes

### Content Time-to-Live

Current algorithm gives content ~24 hours of visibility. Unlike YouTube where content can trend years later, Twitter content has a short shelf life.

**Implication:** Frequency matters more than perfection on Twitter.

---

## New Metrics Specification

### Layer 2: Structural Patterns

#### 2.1 Thread Architecture Metrics

| Metric | What We Extract | Why It Matters |
|--------|-----------------|----------------|
| **Thread Frequency** | % of content that's threaded | Threads increase dwell time |
| **Average Thread Length** | Typical number of posts | Optimal is 3-7 tweets |
| **Reveal Timing** | Where the "payoff" appears | Best performers reveal on tweet 3-4 |
| **Thread Structure Type** | List, story, argument, tutorial | Different structures perform differently |
| **Self-Reply Rate** | How often they extend own threads | Higher = better algorithm performance |

**Thread Structure Taxonomy:**

```
1. LIST THREAD
   Tweet 1: Hook + promise ("7 things I learned...")
   Tweets 2-7: Individual items
   Tweet 8: Summary + CTA

2. STORY THREAD
   Tweet 1: Tension/hook
   Tweets 2-4: Rising action
   Tweet 5: Climax/insight
   Tweet 6: Resolution + CTA

3. ARGUMENT THREAD
   Tweet 1: Contrarian claim
   Tweets 2-4: Evidence/reasoning
   Tweet 5: Anticipated objections
   Tweet 6: Conclusion + CTA

4. TUTORIAL THREAD
   Tweet 1: Problem + promise
   Tweets 2-6: Step-by-step
   Tweet 7: Results/proof
   Tweet 8: CTA
```

#### 2.2 Hook Formula Metrics

| Metric | What We Extract | Why It Matters |
|--------|-----------------|----------------|
| **Hook Type Distribution** | Question, statement, provocation, story | Different hooks = different response rates |
| **First 7 Words Pattern** | Common openings | First 7 words determine if people read |
| **Curiosity Gap Usage** | Incomplete thoughts that demand resolution | Drives clicks and replies |
| **Pattern Interrupt Frequency** | Unexpected openings | Stops the scroll |

**Hook Type Taxonomy:**

```
1. PROVOCATIVE STATEMENT
   "Most marketing advice is wrong."
   "I've never cold called in my life."

2. CURIOSITY GAP
   "The thing nobody tells you about fundraising..."
   "Here's what happened when I..."

3. DIRECT QUESTION
   "Why do most startups fail?"
   "What would you do with $1M?"

4. CONTRARIAN TAKE
   "Unpopular opinion: hustle culture is dead."
   "Everyone says X. They're wrong."

5. STORY OPENER
   "In 2019, I was broke."
   "Yesterday something weird happened."

6. NUMBER/LIST PROMISE
   "7 lessons from building a $10M company"
   "3 things I'd tell my younger self"
```

#### 2.3 Media Integration Metrics

| Metric | What We Extract | Why It Matters |
|--------|-----------------|----------------|
| **Media Attachment Rate** | % of posts with images/video | Visual content gets 2x boost |
| **Media Type Distribution** | Photos, videos, GIFs, screenshots | Different types perform differently |
| **Video Length Pattern** | Typical duration | Optimal lengths vary by content |
| **Screenshot Usage** | Text screenshots, app screenshots | Common for thought leaders |

#### 2.4 Link Placement Metrics

| Metric | What We Extract | Why It Matters |
|--------|-----------------|----------------|
| **Link Frequency** | How often links are included | Links reduce reach |
| **Link Placement** | Main tweet vs reply | Reply placement = 270-486% better |
| **Link Type Distribution** | Articles, products, other social | Different destinations, different behavior |

#### 2.5 Hashtag Metrics

| Metric | What We Extract | Why It Matters |
|--------|-----------------|----------------|
| **Average Hashtags Per Post** | Typical count | >2-3 = 40% penalty |
| **Hashtag Type** | Branded, topical, trending | Different strategic purposes |
| **Signature Hashtags** | Recurring personal tags | Part of voice identity |

---

### Layer 3: Engagement Behavior

#### 3.1 Reply Behavior Metrics

| Metric | What We Extract | Why It Matters |
|--------|-----------------|----------------|
| **Reply Velocity** | Average time to first reply | First 30min = 150x boost potential |
| **Reply Rate** | % of comments they respond to | Higher = better algorithm standing |
| **Reply Depth** | Average exchanges per conversation | Deeper = more engagement signals |
| **Reply Tone Shift** | How voice changes in replies | May differ from main content |
| **Reply Length** | Average reply word count | Thoughtful > one-word |

#### 3.2 Conversation Generation Metrics

| Metric | What We Extract | Why It Matters |
|--------|-----------------|----------------|
| **Conversation Catalyst Rate** | % of posts generating 5+ replies | Replies = 27x algorithm weight |
| **Reply:Like Ratio** | Replies divided by likes | Higher = more conversation-driving |
| **Question Placement** | Where questions appear in content | Questions drive replies |
| **Opinion Strength** | How definitive statements are | Strong opinions generate debate |

#### 3.3 Community Interaction Metrics

| Metric | What We Extract | Why It Matters |
|--------|-----------------|----------------|
| **Quote Tweet Ratio** | QT vs RT behavior | QTs add voice, RTs don't |
| **Engagement Reciprocity** | Do they engage back with engagers? | Builds community, reputation |
| **Reply Target Quality** | Reputation of accounts they reply to | Low-rep replies hurt standing |

#### 3.4 Timing Metrics

| Metric | What We Extract | Why It Matters |
|--------|-----------------|----------------|
| **Posting Schedule** | Typical days/times | Timing affects first-hour velocity |
| **Engagement Window** | How long they stay active after posting | First 30min engagement critical |
| **Timezone Alignment** | Match with audience timezone | Peak times vary by audience |

---

### Layer 4: Algorithm Alignment Score

#### 4.1 Overall Alignment Score (0-100)

Calculated composite of how well natural patterns match algorithm preferences:

```
Alignment Score = (
  Structural Alignment × 0.25 +
  Engagement Alignment × 0.35 +
  Risk Avoidance × 0.25 +
  Boost Utilization × 0.15
)
```

#### 4.2 Structural Alignment (0-100)

| Factor | Optimal | Weight |
|--------|---------|--------|
| Thread usage | 30-50% of content | 20% |
| Media attachment rate | >50% | 25% |
| Link placement | 100% in replies | 20% |
| Hashtag count | 1-2 average | 15% |
| Hook effectiveness | High variety, strong openers | 20% |

#### 4.3 Engagement Alignment (0-100)

| Factor | Optimal | Weight |
|--------|---------|--------|
| Reply velocity | <30 min average | 30% |
| Reply rate | >50% of comments | 25% |
| Conversation catalyst rate | >15% posts get 5+ replies | 25% |
| Self-reply behavior | Regular thread extension | 20% |

#### 4.4 Risk Avoidance (0-100)

| Factor | Risk Level | Weight |
|--------|------------|--------|
| External link usage | High if in main posts | 25% |
| Hashtag overuse | Moderate if >3 | 20% |
| Following ratio | High if following >> followers | 20% |
| Reply target quality | High if engaging low-rep accounts | 20% |
| Toxicity signals | Severe if detected | 15% |

#### 4.5 Boost Utilization (0-100)

| Factor | Opportunity | Weight |
|--------|-------------|--------|
| Video content usage | Major boost available | 35% |
| Trending topic participation | Significant boost | 25% |
| Author engagement with replies | 150x multiplier available | 40% |

---

## Enhanced Deliverables

### Deliverable 1: Master Voice Persona (Enhanced)

**Current sections:**
- Core voice characteristics
- Linguistic patterns
- Tone and style markers

**New sections:**
- Structural signature (how they build content)
- Engagement personality (how they interact)
- Algorithm alignment summary

### Deliverable 2: Twitter Voice Profile (New Format)

```markdown
# [NAME]'s Twitter Voice Profile

## Part 1: Linguistic Voice
[Current VoiceDNA content]

## Part 2: Structural Patterns

### Thread Architecture
- Thread frequency: X% of content
- Average length: X tweets
- Preferred structure: [List/Story/Argument/Tutorial]
- Reveal timing: Tweet X typically contains payoff
- Self-reply rate: X%

### Hook Formula
- Primary hook type: [Provocative/Curiosity/Question/Contrarian/Story/List]
- Signature openers: "...", "...", "..."
- First 7 words pattern: [Description]
- Curiosity gap usage: X%

### Media Integration
- Attachment rate: X%
- Primary media type: [Photo/Video/GIF/Screenshot]
- Video length preference: X seconds
- Visual style notes: [Description]

### Link Behavior
- Link frequency: X%
- Placement: Main tweet X% / Reply X%
- Primary destinations: [Types]

### Hashtag Pattern
- Average per post: X
- Signature tags: #..., #...
- Trending participation: [Low/Medium/High]

## Part 3: Engagement Behavior

### Reply Patterns
- Average reply velocity: X minutes
- Reply rate: X% of comments
- Reply tone: [Same as main / More casual / More direct]
- Average reply length: X words

### Conversation Style
- Conversation catalyst rate: X%
- Reply:Like ratio: X
- Question placement: [End / Throughout / Beginning]
- Opinion strength: [Definitive / Nuanced / Exploratory]

### Community Interaction
- Quote tweet ratio: X% QT vs X% RT
- Engagement reciprocity: [High/Medium/Low]
- Typical reply targets: [Description]

### Timing
- Peak posting times: [Days/Times]
- Engagement window: X minutes after posting
- Timezone: [TZ]

## Part 4: Algorithm Alignment

### Overall Score: XX/100

### Strengths (Keep Doing)
✅ [Strength 1 with explanation]
✅ [Strength 2 with explanation]
✅ [Strength 3 with explanation]

### Friction Points (Optimization Opportunities)
⚠️ [Issue 1]: [Current behavior] → [Recommended adjustment]
⚠️ [Issue 2]: [Current behavior] → [Recommended adjustment]
⚠️ [Issue 3]: [Current behavior] → [Recommended adjustment]

### Risk Factors
🚨 [Any detected risks to reach/reputation]

### Quick Wins
1. [Highest impact, lowest effort change]
2. [Second priority]
3. [Third priority]
```

### Deliverable 3: Algorithm-Aware AI Prompts (New Format)

```markdown
# Twitter Voice Prompt for [NAME]

You are writing Twitter content as [NAME]. Follow these guidelines:

## Linguistic Voice
[Current VoiceDNA prompt content]

## Structural Requirements

### Threading
- Create threads for content over [X] words
- Use [List/Story/Argument/Tutorial] structure
- Place key insight/reveal on tweet [X]
- End threads with [CTA pattern]

### Hooks
- Open with [primary hook type]
- Use these signature patterns: "...", "..."
- First 7 words must [requirement]

### Media
- Attach [media type] when [condition]
- Never post [content type] without visual

### Links
- NEVER put links in main tweet
- Always add links as reply to thread
- Announce link in main with "Link in replies" or "🔗 below"

### Hashtags
- Maximum [X] hashtags per post
- Only use: [signature hashtags] or trending when relevant

## Engagement Voice

### When replying to comments:
- Respond within [tone description]
- Average [X] words
- [Specific patterns]

### Conversation generation:
- End posts with [question type] to drive replies
- Use [opinion strength] statements
- Invite [type of engagement]

## Algorithm Optimization

### Always:
- [Specific instruction]
- [Specific instruction]

### Never:
- [Specific instruction]
- [Specific instruction]

### When in doubt:
- Prioritize replies over likes
- Create conversation, not just content
- Visual > text-only
```

### Deliverable 4: Validation Checklist (Enhanced)

**New section: Algorithm Alignment Check**

```markdown
## Algorithm Alignment Validation

Before posting, verify:

□ No external links in main post (moved to reply)
□ 2 or fewer hashtags
□ Visual content attached (if applicable)
□ Hook follows [NAME]'s signature pattern
□ Thread structure matches [NAME]'s style
□ Ends with conversation catalyst (question/opinion)
□ No spelling errors or made-up words
□ Avoiding blacklist topic signals
□ Posted at optimal time ([TIME RANGE])
□ Ready to engage with replies in first 30 min
```

---

## Implementation Roadmap

### Phase 1: Twitter Deep Dive (Weeks 1-4)

**Objective:** Build and validate Twitter-specific extraction

#### Week 1-2: Metric Development
- [ ] Define exact extraction methodology for each new metric
- [ ] Build data collection framework for Twitter content
- [ ] Create scoring algorithms for alignment metrics
- [ ] Develop benchmark datasets

#### Week 3-4: Deliverable Creation
- [ ] Design new Twitter Voice Profile template
- [ ] Create algorithm-aware AI prompt format
- [ ] Build enhanced validation checklist
- [ ] Develop alignment score visualization

### Phase 2: Beta Testing (Weeks 5-8)

**Objective:** Validate with real users, measure impact

#### Week 5-6: Internal Testing
- [ ] Run extraction on 10 sample accounts
- [ ] Validate metric accuracy
- [ ] Refine scoring algorithms
- [ ] Document edge cases

#### Week 7-8: Beta User Testing
- [ ] Recruit 5-10 beta users
- [ ] Deliver enhanced profiles
- [ ] Measure before/after engagement metrics
- [ ] Gather feedback on deliverable usefulness

### Phase 3: Launch Integration (Weeks 9-12)

**Objective:** Integrate into main VoiceDNA offering

#### Week 9-10: Product Integration
- [ ] Update landing page messaging
- [ ] Revise pricing if needed
- [ ] Train on new deliverable format
- [ ] Create case studies from beta

#### Week 11-12: Launch
- [ ] Announce enhanced framework
- [ ] Publish thought leadership on approach
- [ ] Begin marketing algorithm-aligned positioning

### Phase 4: Platform Expansion (Ongoing)

**Objective:** Extend methodology to other platforms

- [ ] LinkedIn (comments, dwell time focus)
- [ ] YouTube (watch time, engagement)
- [ ] Instagram (saves, shares, comments)
- [ ] Newsletter (open rate, click patterns)
- [ ] Blog (SEO alignment, engagement)

---

## Future Platform Expansion

### LinkedIn Algorithm Factors (Research Required)

| Known Factor | Implication |
|--------------|-------------|
| Dwell time | Longer posts with hooks perform better |
| Comments > reactions | Similar to Twitter's reply priority |
| First hour velocity | Early engagement matters |
| Native content preferred | External links deprioritized |
| Document/carousel posts | Higher engagement than text |

### YouTube Algorithm Factors (Research Required)

| Known Factor | Implication |
|--------------|-------------|
| Watch time | Primary ranking factor |
| Click-through rate | Thumbnail + title critical |
| Engagement (likes, comments) | Secondary signals |
| Session time | Does viewer stay on YouTube? |
| Upload consistency | Regular posting rewarded |

### Instagram Algorithm Factors (Research Required)

| Known Factor | Implication |
|--------------|-------------|
| Saves | Highest weight signal |
| Shares | Strong signal |
| Comments | Important for reach |
| Reels prioritized | Video > static images |
| Hashtag strategy | Different from Twitter |

---

## Appendix: Raw Algorithm Data

### A. Twitter Scoring Weights (From Source Code)

```java
// From: home-mixer/server/src/main/scala/com/twitter/home_mixer/
// functional_component/scorer/FeedbackFatigueScorer.scala

private val weights = Map(
  "Favorite" -> 0.5,
  "Retweet" -> 1.0,
  "Reply" -> 13.5,
  "GoodProfileClick" -> 12.0,
  "VideoPlayback50" -> 0.005,
  "ReplyEngagedByAuthor" -> 75.0,
  "GoodClick" -> 11.0,
  "GoodClickV2" -> 10.0,
  "NegativeFeedbackV2" -> -74.0,
  "Report" -> -369.0
)
```

### B. Twitter Blue Multipliers

```java
// Blue verified author boost multipliers
inNetworkMultiplier = 4.0  // default
outOfNetworkMultiplier = 2.0  // default
```

### C. Reputation Calculation (Tweepcred)

```
PageRank-style algorithm:
- Incoming engagement from high-rep accounts → boost
- Incoming engagement from low-rep accounts → penalty
- Following >> Followers → reputation penalty
- Account age factor: full weight after 30+ days
- Verification: fixed score of 100
```

### D. Known Penalty Triggers

```
- External links in post body
- More than 2-3 hashtags (40% reduction)
- Misspellings / unknown words (95% penalty)
- Blacklisted topics (severity varies)
- Toxicity detection (ML-based)
- NSFW/violent content flags
- Rapid unfollowing behavior
- Engagement with low-reputation accounts
```

### E. Known Boost Triggers

```
- Video content (heavy prioritization)
- Images/GIFs (2x vs text-only)
- Trending topic alignment
- Author replying to comments (150x effective)
- Dwell time >2 minutes
- Thoughtful replies to high-rep accounts
- Twitter Blue verification
```

---

## Sources

### Primary Sources
- [GitHub: twitter/the-algorithm](https://github.com/twitter/the-algorithm)
- [GitHub: twitter/the-algorithm-ml](https://github.com/twitter/the-algorithm-ml)

### Analysis Sources
- Alex Finn (@AlexFinn) - "The Most In Depth Breakdown of the X Algorithm You'll Ever Read" (Feb 2024)
- [Buffer - How the X Algorithm Works](https://buffer.com/library/twitter-timeline-algorithm/)
- [Sprout Social - Twitter Algorithm 2025](https://sproutsocial.com/insights/twitter-algorithm/)
- [Social Media Today - Twitter Algorithm on GitHub](https://www.socialmediatoday.com/news/twitter-publishes-its-tweet-ranking-algorithm-data-on-github-providing-mor/646581/)

---

## Document History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Dec 2024 | Initial framework specification |

---

*This document serves as the master reference for the enhanced VoiceDNA framework. All implementation decisions should align with this specification.*
