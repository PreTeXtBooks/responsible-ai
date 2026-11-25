# Principles of Responsible AI

This repository contains the source for a PreTeXt book, *Principles of Responsible AI: In a Kenyan Context*.
It is modelled on the structure of *An Introduction to Working with Data* (IWD).

## Status

Skeleton only: six placeholder chapters with the standard structure. Chapter titles and order are expected to change.

## Chapter structure

Each chapter follows the same structure:

1. **A real case study** - ideally Kenya-based, as that is the target audience. It introduces the concept through a story that requires no prior technical knowledge.
2. **A STACK question** - prompting the reader to think deeply about the problem.
3. **An illustrative worked example using software** - introducing the ideas in a hands-on, data-first way.
4. **Exercises** - with the option to add further STACK questions here too.

## Adding a chapter

1. Copy `pretext/source/ch_template.ptx` to `pretext/source/chN_your_title.ptx`.
2. Replace every `CHANGE-ME` in the `xml:id`s with a short unique name, and fill in the title.
3. Add `<xi:include href="./chN_your_title.ptx" />` to `pretext/source/main.ptx`.

## Building

See [pretext/README.md](pretext/README.md).
