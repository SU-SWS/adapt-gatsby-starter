# Adapt Gatsby Starter Testing

Gatsby starter app with ci/cd workflows configured for [gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

## Using this Starter

TODO

## Configuration

### Github

For our workflow automation we need to provide github a [personal access token with repo scope](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
and store it as a repository secret named `GH_ACCESS_TOKEN`. This token is used for automatic semver versioning and merging changes back into `dev`.

### Netlify

Once your site is integrated with Netlify you can add contextual build variables for your site in the Netlify deploy settings.
We're currently using [netlify-plugin-contextual-env](https://github.com/cball/netlify-plugin-contextual-env) which means if you
want contextual env values for a variable named `GATSBY_STORYBLOK_TOKEN` in your builds you would define the following in Netlify:
- `GATSBY_STORYBLOK_TOKEN` = `THIS IS THE BASE VALUE THAT WILL BE USED IF NOT OVERRIDDEN WITH CONTEXT`
- `PRODUCTION_GATSBY_STORYBLOK_TOKEN` = `THIS VALUE WOULD BE USED IN PRODUCTION`
- `DEV_GATSBY_STORYBLOK_TOKEN` = `THIS VALUE WOULD BE USED FOR OUR DEV BRANCH DEPLOY`
- `DEPLOY_PREVIEW_GATSBY_STORYBLOK_TOKEN` = `THIS VALUE WOULD BE USED FOR OUR DEPLOY PREVIEWS FOR DEV AND PROD`

Make sure to add netlify deploy-preview to your github `dev` branch require status checks to ensure proper PR gating.

### Codeclimate

To add codeclimate checks log in to codeclimate and add your repository with `dev` as the default branch.
Go the codeclimate repo settings and install the Github pull request status updates. Now go back to Github
and make sure `codeclimate` is added to required Status Checks for the `dev` branch protection settings.

## Development Workflows

All general development work should be based off of the `dev` branch.
Branches should abide by the following branch name format: `{branch-type}/JIRA-###_optional-description-of-task`
where `branch-type` is `feature/`, `task/`, or `bug/` and `JIRA-###` corresponds with the Jira ticket number.
This will ensure that features get labeled and organized correctly in the release and connect to Jira appropriately.

- Create branch from `dev` following the above outlined branch naming conventions.
- Complete work in your branch.
- Create a pull request from your branch into `dev` branch. This will deploy a Netlify preview for your branch.
- On PR approval, **squash merge** your branch with the following merge commit message format: `JIRA-### | Brief description of work completed`.

Pull requests against dev will need to pass status checks for the following:
- lint
- test
- codeclimate
- Branch up to date with `dev`
- Netlify build/deploy preview

Pull requests merged into dev will kickoff a Netlify branch deploy for the `dev` branch.

## Release Workflow

To release code to production you will need to create a release branch from `dev` and make a pull request to `main`.
Including semver tags (`[major]`, `[minor]`, `[patch]`) will automatically add a semver label to the PR which will
determine how to increment semver during release. If no label is provided it will default to `patch`.

- Create branch from `dev` (or commit ref from `dev`) with `release/` prefix and optional semver tag (e.g. `release/completely-refactor-everything[major]`)
- Create a pull request from your `release/my-cool-release` branch into `main`
- On PR approval, do a standard **merge commit** into `main`

Merges to `main` will kickoff the following tasks:
- Semver version bump
- Publish github release
- Netlify production build and deploy
- Merge changes back into `dev`


## Hotfix Workflow

Hotfix workflows should only ever be used when there is a production bug that needs immediate attention and
there are changes in `dev` that are not ready for deployment.

- Create a `hotfix/` branch from `main`
- Complete the fix in your branch
- Create a pull request from your hotfix branch into `main`
- On PR approval, **squash merge** your branch with the following merge commit message format: `JIRA-### | Brief description of hotfix`.

Depending on the nature your hotfix and the history of `dev` you may need to to manually merge `main` back into `dev` to resolve merge conflicts.



## Roadmap

- [x] PR labeler
- [x] Status Checks
  - [x] lint
  - [x] unit test
  - [x] build N/A (handle in netlify?)
  - [x] codeclimate
- [x] deploy dev (Netlify branch deploy)
- [x] deploy prod (Netlify prod deploy)
- [x] deploy feature (preview) branch (handle in netlify?)
- [x] semver
- [x] release notes
- [ ] slack notify
- [ ] Add decanter and decanter-react
- [ ] storyblok component update / content migration
- [ ] Typescript/Typecheck?
- [ ] Netlify lambdas?
