# PreTeXt Book Version

This directory contains the PreTeXt source for *Principles of Responsible AI*.

## Building the Book

Install the PreTeXt CLI (`pip install -r requirements.txt`), then:

```bash
cd pretext
pretext build web
pretext view web
```

### PDF version

```bash
pretext build print
```

If the book includes STACK questions, run `pretext generate stack` first (once, and whenever STACK questions change).

## GitHub Actions Deployment

Pull requests into `main` are test-built (`.github/workflows/test-pretext.yml`). Pushes to `main` are built and deployed to GitHub Pages (`.github/workflows/deploy-pretext.yml`). GitHub Pages must be enabled for the repository with the source set to "GitHub Actions".

## Project Structure

- `source/` - PreTeXt source files (`main.ptx`, `ch*.ptx`, `meta_*.ptx`)
- `source/ch_template.ptx` - blank chapter to copy (not included in the build)
- `assets/images/` - images
- `assets/stack/` - STACK questions (e.g. add a question bank as a git submodule here)
- `assets/custom-styles.css`, `assets/custom-footer.js` - theme overrides
- `publication/publication.ptx` - publication options
- `project.ptx` - build targets
- `output/` - generated output (not tracked in git)

## STACK questions

Reference a question from a chapter with, for example:

```xml
<exercise xml:id="ex-example">
  <stack source="stack/your-question.xml" label="stk-example"/>
</exercise>
```

The deploy and test workflows check out submodules recursively, so a question bank can be added later with `git submodule add`.
