# Chapter 6 notes: what we used, and what still needs checking

Written 26 November 2026. A first draft. NOT yet fact-checked in the second-read way
that Chapters 4 and 5 were.

## Sources

- Woodson (2018), a book review of O'Neil's Weapons of Math Destruction (read in full, 4 pages).
  The chapter cites Woodson, not the book. O'Neil's three claims, her examples (zip codes,
  policing loops, teachers scored on 25 to 30 students, hiring software) are as he describes them.
  He also criticises the book: some examples aren't strictly WMDs, and her reply to the "humans are
  biased too" objection is "overly optimistic". Not used in the chapter.
- Davies and Douglas (2020), a DRAFT chapter dated 17 Nov 2020. I read pages 1 to 10 closely, and
  the conclusion. Only the central idea is used: leaving race out of an ML model doesn't stop it
  learning a proxy for race. I called the authors "academics" because the paper doesn't say what
  they are. Check the final published version before citing.
- Lily's own page, "Proxy Variables" (23 April 2025): the village survey and the school-type
  example. The village numbers in Try It are hers (mean squares 463.73 and 111.36, then 22.88
  and 23.34).
- Podcast 172 (Proxy Variables): full transcript supplied by Lily. Released 4 July 2025.
- Podcast 269 (Why Better Data Matters; David and Kate): full transcript supplied by Lily.
  Released 9 June 2026. The bouldering story is David's retelling of what happened to Lily, so she
  should check the wording. The page's search snippet doesn't mention it, but the transcript does.
  The height: the transcript says "25 foot" and Kate remembers "25 metres". The chapter says 25-foot
  and mentions Kate's memory.
- Podcast 17 (How Data Lies): NOT read by me. A helper summarised the transcript. The chapter
  uses only the Simpson's paradox example, the "data-driven vs intelligent decisions" line and
  the small-sample point (which is from Woodson). Please check against the audio or transcript.
  The page shows no release date.
- Chapter 4 and 5 facts about SHA, the Post Office/birdsong (Chapter 2) and the Sahel image bank
  (Chapter 5) are re-used.
- New SHA fact in this chapter: Lighthouse says 56.02% of poor households with electricity are
  excluded (predicted not poor). From the PDF table (Exclusion Error, Has Electricity = Yes).
  I only saw the "Yes" row in the text I extracted, so the comparison with the "No" row is not
  in the chapter.

## Things to check

- "SHA told Africa Uncensored in November 2025 that it was still using the original model":
  from the Africa Uncensored feature, read by a helper, and the same paragraph says it is unclear
  whether SHA adopted IDinsight's changes. I reported both.
- "Feedback loop" is used in two ways. The chapter separates "a loop that corrects" (Post Office)
  from "a loop that reinforces" (policing). Please say if that matches how the course uses it.
- "Goodhart's law" is my addition. It isn't in the transcript.
- Tanzania (arts teachers 4 hours, science teachers 24, ratio of six to one) is David's account.
  The chapter says it hasn't been checked.
- I did not find the "AI world map: whose data is used?" link. There's a TODO in the chapter.
- The Try It has a TODO for the data set and R steps.

## Podcasts, where they might go (not decided)

Series 263 to 274 (David and Kate on Karen Hao's Empire of AI). I've only read the blurbs for
most of them, and the full transcripts of 267 and 269. 268 was read through a helper.
- 266 (Building better AI with less; smaller specialised models): Chapter 1 (small language
  models) or Chapter 9.
- 267 (The forces shaping AI; investors, monopoly, research capture, externalities): Chapter 8 or 9.
- 268 (AI as a product vs a system; hidden labour, Scale AI in Kenya): Chapter 8 (or Chapter 3).
- 270 (Human capital; human expertise): Chapter 3 or Chapter 10.
- 274 (The power of the AI narrative): Chapter 1 or 2 (hype).
- 265 (Connectionist versus symbolist AI): Chapter 2.
- 104 (Misusing data): Chapter 4 or 7.
- 272, 273 (community-centred AI; future of work): Chapter 9 or 10, or the MMI809 book.

## The MMI809 book (separate)

Its chapters 2 and 3 are Proxy Variables and Feedback Loops, so this chapter's material overlaps.
PreTeXt can share files between books, so it is worth keeping those sections self-contained.

## Verification pass, 26 November 2026

Podcasts 172, 269 and 17 were re-read from their pages by a second helper against a
numbered list. The SHA statements were re-checked on the Africa Uncensored and Lighthouse pages.
The electricity result was checked in the Lighthouse PDF myself.

Fixed:
- Podcast 17 (How Data Lies) does NOT mention small samples, teacher evaluation, missing
  data or unknown unknowns. Those parts were wrongly sitting inside the podcast section.
  They are now in their own section, "Too Little Data, and Data That Isn't There"
  (small samples from Woodson, known and unknown unknowns from your Moodle text). The
  podcast section only claims what David says: Simpson's paradox with the digital
  literacy example, the naive reading being wrong, and "intelligent decisions, not
  data-driven ones".
- Podcast 172: "extreme and exaggerating" is David's remark, not "we". The ranking
  detail is "administration staff", not admissions staff, and "students from certain
  backgrounds" get CV help.
- Podcast 269: David blames the scraping of the internet for not telling the April Fool's
  post from a real one. He says "disassociation", not "gap". Kate says the series is "loosely
  in conversation with" Karen Hao's book (not "responding to").
- SHA: added that Lighthouse found IDinsight's alternative design wasn't more accurate
  either, so the missing loop is about checking and learning, not just adopting that fix.

Confirmed:
- Electricity: the PDF table has the "Yes" row: exclusion error 56.02%, predicted poor 17.62%,
  actually poor 26.52%. The text says poor households with electricity are excluded more
  than poor households without. The chapter says only the first part.
- Africa Uncensored: "SHA told us in November last year that it was still using the old
  one" (the article is dated May 2026, so November 2025), and "it remains unclear" whether
  SHA adopted the new system. IDinsight's recommendation to contest predictions: confirmed.
- Florence's automated appeal "denied without a reason given": confirmed (Lighthouse page).
- Woodson and the village numbers were read directly by me when drafting.

Still not 100%:
- The survey year: Africa Uncensored's article says "2020" in one place and 2021 in another.
  Lighthouse's methodology and SHA's own FOI reply say 2021. The chapter says 2021.
- The Tanzania numbers are David's account of what happened and haven't been checked.
- Davies and Douglas is a draft; the chapter uses only its central idea.
- The two TODOs: the village data set and video, and the "AI world map" link.
