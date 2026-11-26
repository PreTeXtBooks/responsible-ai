# Chapter 5 research notes: what we checked, and what we haven't

Written 26 November 2026.

## Case study: AI-writing detectors

Read by a helper, not by me directly (so worth a second look before publishing):
- Daily Nation, Jackson Ngari, 5 September 2025: the students (Ian Thuku at KCA, Daniel Chacha
  at Kenyatta, Victor Onyambu at Moi, Dr James Mwita at Rongo). The page also showed a
  subscription prompt. The article does not say how Victor's case ended. It does not name
  any university's written policy on detectors.
- Liang et al. (Stanford), arXiv 2304.02819 (HTML version v3). Numbers used: 91 TOEFL essays
  (from a Chinese educational forum, year 2020 or earlier), 7 detectors, 61.22% average false
  positive, 18 of 91 flagged by all seven, 89 of 91 by at least one, 88 US 8th-grade essays
  near-perfect, ChatGPT "enhance word choices" 61.22% to 11.77%, simplifying the 8th-grade
  essays 5.19% to 56.65%. The paper says it was published in Patterns (Cell Press), July 2023;
  I could not confirm the journal DOI. The arXiv link is what the chapter cites.
- The Markup, 14 August 2023 (Pittsburgh; OpenAI's detector shut at the end of July 2023;
  Turnitin's reply).
- Daily Maverick op-ed, 25 July 2025 (University of Cape Town switched off Turnitin's AI
  detection). It cites a TimesLIVE article we did not read, and says other universities
  followed but names none.

Not found: any published test of AI detectors on Kenyan writers. My search was not exhaustive.
The chapter says the Stanford study did not test Kenyan writers, and that the gap is open.

Not used: the Global Witness / Foxglove test of Facebook's hate-speech checks before the 2022
election (it failed in both Swahili and English, so it is not clearly about language bias; better
for Chapter 8).

## Videos

- 59bMh59JQDo: title "3 types of bias in AI | Machine learning". I read your pasted transcript
  (interaction, latent and selection bias). The channel was not shown on the page I could
  read, so the chapter does not credit Google. Tell me the channel and I will fix the
  bibliography.
- The three UCLA videos (titles from YouTube's oEmbed): "AI & Bias - What are Algorithms and
  how do they work?", "AI & Bias - When Algorithms Don't Work", "AI & Bias - So What's the
  Solution?". Channel: UCLA Institute for Technology, Law & Policy. I have not seen their
  content or their lengths. The one-sentence descriptions in the chapter come from the
  Moodle course text you pasted.
- The videos are embedded with the privacy-enhanced YouTube address. They need an internet
  connection.

## Podcasts

Transcripts were read by a helper and summarised. Claims in the chapter are attributed to
you or David, and I have not checked them.
- Episode 49: https://www.idems.international/podcast-player/3795/049-artificial-words-the-unseen-bias-of-ai-in-everyday-language.mp3
- Episode 35: https://www.idems.international/podcast-player/3512/035-generating-ai-images-do-ai-implementations-suppress-diversity.mp3
- Neither page shows a release date. The bibliography says "to be confirmed".
- Left out of episode 49: David's claims about the seven trillion dollars and Elon Musk.
- Left out of episode 35: the university competition where AI wrote "eight of the top ten" ideas
  (you were not sure of it). The pilot seat story is in, with "he doesn't know which air force".

Where the others could go:
- 17, Responsible AI: How Data Lies: Simpson's paradox, the Dutch case again, "intelligent
  decisions, not data-driven". Chapter 6 (where bias comes from) or Chapter 4.
- 104, Misusing Data: the survey answers that led to a life insurance refusal. Chapter 4 or 7.
- 268, What Lies Behind AI as a Product (David and Kate): hidden labour, data centres, Scale AI
  in Kenya, Fairphone. Chapter 8 (Who is responsible?). Release date 5 June 2026.

## The Swahili safety question

Your note said: "safety filtering was done mainly in English, so Swahili may be less safe
(Karen Hao's claim, unverified)." The chapter attributes it to Karen Hao in the WSJ's
reporting and cites the existing WSJ source. I could not re-read the WSJ transcript in this
session, so please check the wording against it.

What the papers say (read by a helper, partly through summaries):
- Deng et al. (arXiv 2310.06474; the page lists ICLR 2024). Swahili was in the low-resource
  group of nine languages. Averages for unsafe replies: ChatGPT 4.34% (high-resource) vs
  14.92% (low-resource); GPT-4 3.60% vs 10.16%; English under 1%. Human-translated test set.
  Swahili on its own was lower than other low-resource languages in that test.
- Zhang et al. (arXiv 2605.17173; preprint, COLM 2026 poster listed): 61 model
  configurations; 22 were more vulnerable in English than in low-resource languages.
- Marx and Dunaiski (arXiv 2605.18239; preprint): Kiswahili multi-turn tests 41.8% to 70.9%.
  The abstract and conclusion disagree on which model had the top figure, and the paper has a
  typo ("312.65%"). Treat the exact figures with care.
Together they support "it depends on the model and the test", not the simple claim.

## What I did not do

- I did not check the stories in the Nation piece beyond what it says.
- I did not look for other Kenyan bias cases (Huduma Namba, facial recognition) in this pass.
- The Try It suggests GPTZero by name because the Nation article does. Check it is still free.

## Verification pass, 26 November 2026 (second read of every source)

Each claim in the chapter was re-checked against the page itself, by a second helper
with a numbered list of statements. Your WSJ text was checked in the session transcript.

Errors found and fixed:
- Ian Thuku: it was his LECTURER who ran the paper through GPTZero, not Ian. The article
  also says the suspicion was about his abbreviations, not his style. The 10-mark write-up
  was part of a task with a 40-mark design part (the "50 marks" was my arithmetic, now removed).
- Victor: the lecturer said it "came out as AI-generated" and did not name the tool.
  The chapter no longer says "a detector flagged it".
- Dr Mwita's signs and his test were reworded to match the article (Western examples,
  "insert the name of the business", a sit-in test).
- Daniel Chacha: the article says "we were 200 students" and calls them classmates. It is
  not clear whether all 200 were accused. The chapter says he says 200 were accused;
  if you want to be safe, change it to "a large class".
- Stanford paper: the explanation (perplexity) is "one possible explanation", so the chapter
  now says "suggested". The paper says detectors are "perplexity-based and supervised-learning
  based", so "most rely on predictability" became "many ... at least in part". The journal
  date is not on the arXiv pages, so the bibliography says "Patterns (Cell Press), 2023".
- Pittsburgh: its teaching centre told staff it didn't support any AI detectors (end of June
  2023) and the university was among the ~2% of Turnitin customers who switched the AI
  indicator off. OpenAI shut its detector at the end of July 2023 "because of low accuracy".
- Turnitin said it was trained on writing by English speakers in the US and abroad and by
  multilingual students.
- Daily Maverick: it says UCT's switch-off was "recently announced". It gives no date and
  names no other South African university. The chapter says "announced in 2025".
- Podcast 49: David's word for using one word as evidence is "insane", not "ignorant". He
  says "I think there already are lawsuits" and that he was reading about it recently
  (not that he had read about specific cases). His essay story is about someone asked to
  "write it there and then". You said you'd "bet" the words are in the Turing proposal; you
  did not say you checked. Your reading was of "feedback" saying Nigerian English is a
  "standalone dialect". The "first draft" line is that he's happy as long as it represents the
  author's ideas.
- Podcast 35: David's words are "racial discrimination baked in", "totally neutral", "totally
  false" (for "it's the algorithm"), and that the "market incentives aren't there". I removed
  "technically possible to build diversity in", which the transcript check did not confirm.
  His point about a human in the loop is the set-up he trusts, not advice.
- The Swahili passage now uses what Karen Hao actually said on the WSJ podcast (The Journal,
  host Annie Minoff). She said: ChatGPT was developed primarily for English; much of the
  content moderation and safety work was in English; in Swahili you'd get more misinformation,
  more confusing sentences, and potentially more of the content they'd filtered out. The papers
  below only test harmful requests, so they cannot confirm the misinformation part.
- Zhang et al. lists "Poster at COLM 2026" in the arXiv comments, so the chapter no longer
  calls both papers "preprints". "61 configurations" (model versions plus settings), not "versions".
- Marx and Dunaiski: the abstract and the conclusion disagree on which model had the top
  Kiswahili figure. The chapter only gives the range (41.8% to 70.9%). The "machine translation"
  point is the authors' comment about isiXhosa and isiZulu, now worded that way.

Confirmed as written:
- The Stanford numbers (91 essays, Chinese educational forum, year 2020 or earlier, seven named
  detectors, 61.22%, 18 of 91, 89 of 91, 11.77%, 5.19% to 56.65%, GPT-2 backbone, the pilot-study
  caution), Table 1 of Deng et al. (4.34/14.92, 3.60/10.16, English 0.63% and 0.95%), the 22
  of 61 line, and most of the podcast statements.

Still not 100%, and why:
- The Stanford paper's near-perfect result on the 88 US eighth-grade essays is "near-perfect" in
  the text. The exact figure is in a chart I could not read (the 5.19% is from another test).
- "Nobody has published a test on Kenyan writers" is my search result, not proof.
- The students' stories are their own accounts, in one newspaper article.
- The three UCLA videos: I have only their titles. Their descriptions in the chapter come from your Moodle text.
- The 3-types video: its channel is unknown. The transcript you pasted is what I used.
- Podcast release dates are not on the pages.
- That English is an official language in Kenya is general knowledge, not from a source here.
