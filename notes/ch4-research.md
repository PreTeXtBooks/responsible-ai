# Chapter 4 research notes: what we checked, and what we haven't

Written 26 November 2026. Read this before editing Chapter 4.

## SHA means test (the case study)

Read in full:
- Lighthouse Reports, "Hiding behind AI" and its methodology page (4 May 2026).
- Africa Uncensored, the web feature and the blog post (4 and 5 May 2026).
- Eastleigh Voice (7 May 2026): SHA's reply, and the journalists' answer.
- Citizen Digital (7 May 2026): SHA's figures.
- Kenyans.co.ke (7 March 2024; 26 October 2026): the 2.75% rate, the KES 300 minimum.
- Business Daily (5 February 2025): 83.5% informal (KNBS, as cited).
- Capital FM via AllAfrica (25 March 2026): the High Court ruling.

Also read, supplied by Lily on 26 November 2026: the full Lighthouse methodology
(pasted text and the PDF, including its tables) and the Africa Check guide
(25 November 2026). The Pulse article on the Vihiga High Court ruling against the 2%
HIMS fee on SHA claims (24 November 2026, Justice Nyakundi) was read but NOT used:
it is about a fee on hospitals, not the means test. It could back up an "oversight"
point (Kenyan courts have now checked SHA twice) if you want it.

Corrections made on 26 November 2026, after reading the full methodology:
- The Murang'a couple and the Meru woman are households in the 2021 survey, not
  people who were billed. The draft first said they were charged. Fixed.
- "16% predicted correctly, 80% overcharged" is for the poorest TENTH of households
  (decile 1), and "correct" means within 0.2 log points (about a fifth) of the true
  figure. Fixed.
- "Pulls everyone towards the middle" is now Lighthouse's own statement (regression
  predicts towards the centre), with a study in the Journal of Development Economics.
- Lighthouse calls the model machine learning (linear regression, "a simple form").
- The variables list in the chapter now follows Lighthouse's table. I had added radio,
  phone and farm from the Africa Uncensored feature, which Lighthouse's table
  does not list.
- I dropped "academics at Kent, Georgetown and Delft reviewed the rebuild". The
  methodology only thanks four named academics. The claim of peer review was on the
  main investigation page (read through a helper, not by me).
- Added Lighthouse's test of IDinsight's proposed changes (47% vs 54% placed in the
  right band) and the rural confusion matrix (400 of 929 poor households predicted
  non-poor: my own division, 43%).
- Informal sector share is now 83.8% in 2025 (Africa Check citing the KNBS Economic
  Survey 2026), replacing the 83.5% from Business Daily.

From Africa Check (read in full from your paste; I have not opened the linked reports):
- SHA's impact report to 31 March 2026: 30.13 million registered beneficiaries, 16.81
  million principal members, about 4.78 million active contributors.
- 2025-26 Mini DHS (KNBS): 43.9% of registered contributing members said the premium was
  paid that month. Poorest fifth 24% report SHA cover vs 49.2% in the richest fifth.
- Ruto's 18 November 2026 address: 33.7 million registered, the kidney-transplant example
  (KES 840 a month; bill of KES 966,000 excluding dialysis).
- Africa Check says the President's "8 million NHIF members in 2022" does not match
  official records (about 15.5 million). Not in the chapter.

Things to know:
- Lighthouse's figures come from its own rebuild of the model. It says the rebuild
  may not match SHA's real system, and that real registrations are self-reported.
- The "80 to 90 per cent error rate" that I mentioned in chat is NOT on any page
  I read. It came from a search summary. It is not in the chapter. Do not use it.
- Peer review: Lighthouse names the universities (Kent, Georgetown, Delft) but not
  who reviewed it. The AU feature just says "independent academic experts".
- Survey year: Lighthouse says KCHS 2021. One AU page says 2020. The chapter says 2021.
- The pages use "income" and "consumption" interchangeably. The chapter says
  "what the household spends" and "income" in places. Tidy up if you want it exact.
- Is it AI? It is a linear regression. Lighthouse calls it a simple form of machine
  learning. The chapter says so.
- The appeals claim ("SHA says appeals are built into the system") came from a
  search summary, so it is NOT in the chapter. Appeals come from Khaoya (an ex-developer)
  and from Florence's automated refusal (Lighthouse).
- The judge's name is spelled "Mwamunye" in one report and "Mwamuye" in others, so
  the chapter just says "the High Court". The judgment date is probably 24 March
  2026 (my guess from "delivered Tuesday"). Reports of the judgment: Capital FM only.
- The Guardian article is not read (the Guardian blocks us):
  https://www.theguardian.com/global-development/2026/may/04/kenya-ai-healthcare-reforms-driving-up-costs-for-poor
- Not read: Lighthouse's code on GitHub (https://github.com/Lighthouse-Reports/kenya_sha_pmt),
  the documentary (https://www.youtube.com/watch?v=2ylELcRjakM), the IDinsight report.
  The IDinsight findings are as quoted by Africa Uncensored.
- Accounts of Peris, Florence and Grace are the people's own accounts as the
  reporters give them. Nothing in the pages gives hospital records.
- Not used: anonymous sources in the AU feature (said officials knew; "bulldozed
  through"); a claim of KES 12.7 billion fraud; the "only 5 million of 20 million pay".

## COMPAS

ProPublica's article and methodology page were read in full. Used: the Borden and
Prater example, the false positive rates (44.85% and 23.45%), 61% overall accuracy,
Northpointe's disagreement, Zilly in Wisconsin.
NOT checked: the later criticisms of ProPublica's analysis (Northpointe's rebuttal,
Flores et al., Kleinberg et al., Chouldechova). The chapter does not mention them.
If you want the "fairness definitions conflict" point, we should read those first.

## Dutch childcare scandal

Only from the podcast (episode 21). The chapter attributes it to the episode. No
figures (such as number of families) are used. Check before adding any.

## Podcasts

- Episode 21: https://www.idems.international/podcast-player/3360/021-where-things-have-gone-wrong-with-ai.mp3
- Episode 65: https://www.idems.international/podcast-player/3971/065-hallucitations.mp3
- Neither page shows a release date. The bibliography says "to be confirmed".
- In episode 65 you said a "Harvard law professor" and a mayor in Australia. You were
  not sure of the details, so the chapter says "a law professor" and leaves out the mayor.
- David's "humans check humans more carefully than AI" study is flagged in the text
  as something to look up. He said he wasn't sure of it.

## Kenyan courts (the short example)

Used: Nairobi Law Monthly, 28 May 2026 (draft Judiciary AI directions: disclose AI use,
verify every authority, no wholly AI-generated documents without human review).
It is one outlet, and we haven't seen the draft itself.
Not used:
- The 2025 Supreme Court warning (Justice Lenaola) and Justice Magare's July 2025
  dismissal. Only seen in search snippets (TechCabal and Capital FM would not open).
- The April 2026 ruling by Justice Chigiti. Citizen Digital and AllAfrica say the court
  found no evidence of fake citations. Nairobi Law Monthly says he set aside a judgment
  because the court was misled. These conflict. Read the ruling before using it.

## Not read, from your list

CIO "5 famous analytics and AI disasters", the AI Incident Database and the
DigitalDefynd list. We could use the Incident Database for an exercise.

## Verification pass, 26 November 2026 (second read of the main sources)

Fixed after re-checking:
- Peris: she "used to" do washing and could no longer work (Lighthouse), and the
  chapter no longer says she was told to pay "before treatment". The reporters say
  she hasn't been able to afford more payments or aftercare; her own quote gives
  "other responsibilities" as the reason.
- Florence: the appeal was an automated line, not a "request for review".
- Grace: the pages don't say "pseudonym" in words (an asterisk marks a changed
  name). The 10% and 20% are her figures. Her words are "people are dying at home";
  the "because they can't pay" link is the reporters' framing, so it is now attributed.
- Khaoya is paraphrased by the reporters, not quoted.
- SHA's reply: the date is only "Wednesday" in the articles. Africa Uncensored (not
  Lighthouse) said the reply didn't answer its questions.
- The March 2026 ruling is about the rollout. It says nothing specific about the
  means-test model. The petitioners aren't named in the Capital FM article.
- COMPAS: ProPublica's "61%" is the share of people flagged as likely to reoffend who
  were arrested again, not "right 61% of the time overall". Prater's arrest year isn't
  given; his later crime was breaking into a warehouse.
- Dutch section: it was Lily who said "determine", and David agreed. Fixed.
- Registered but unpaid: primary care stays open to everyone. Fixed.

Still not verified by me directly:
- The Guardian article; the IDinsight report; the documentary.
- The Capital FM and AllAfrica reports are the only source for the ruling.
- Grace's, Peris's and Florence's accounts rest on one reporting team.
- The Kenyan courts example rests on one outlet (Nairobi Law Monthly).
- A search for other Kenyan fake-citation rulings did not work (a consent page
  blocked it), so that is still open.

## Charts (pretext/assets/images, all SVG, drawn by us)

- ch4_accuracy_by_decile.svg: Lighthouse's published results file
  (kenya_sha_pmt, prediction_accuracy_by_decile.csv), plotted as given.
- ch4_exclusion_errors.svg: Lighthouse's model_performance_summary.csv (29.71%
  urban, 43.06% rural, 38.94% all).
- ch4_regression_illustration.svg: MADE-UP data (random numbers, seed 11), labelled as such.
- ch4_registered_vs_paying.svg and ch4_wealth_gap.svg: Africa Check's figures.
- The Lighthouse repo is MIT-licensed, with no separate data terms. The survey data
  itself isn't in it. We redrew the charts and credit Lighthouse in each caption.
- The scripts that make the charts are not in the repository yet.
