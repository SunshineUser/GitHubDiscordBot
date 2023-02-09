export const ancillary = `

Manipulation commands
git-apply[1]
Apply a patch to files and/or to the index

git-checkout-index[1]
Copy files from the index to the working tree

git-commit-graph[1]
Write and verify Git commit-graph files

git-commit-tree[1]
Create a new commit object

git-hash-object[1]
Compute object ID and optionally creates a blob from a file

git-index-pack[1]
Build pack index file for an existing packed archive

git-merge-file[1]
Run a three-way file merge

git-merge-index[1]
Run a merge for files needing merging

git-mktag[1]
Creates a tag object with extra validation

git-mktree[1]
Build a tree-object from ls-tree formatted text

git-multi-pack-index[1]
Write and verify multi-pack-indexes

git-pack-objects[1]
Create a packed archive of objects

git-prune-packed[1]
Remove extra objects that are already in pack files

git-read-tree[1]
Reads tree information into the index

git-symbolic-ref[1]
Read, modify and delete symbolic refs

git-unpack-objects[1]
Unpack objects from a packed archive

git-update-index[1]
Register file contents in the working tree to the index

git-update-ref[1]
Update the object name stored in a ref safely

git-write-tree[1]
Create a tree object from the current index

Interrogation commands
git-cat-file[1]
Provide content or type and size information for repository objects

git-cherry[1]
Find commits yet to be applied to upstream

git-diff-files[1]
Compares files in the working tree and the index

git-diff-index[1]
Compare a tree to the working tree or index

git-diff-tree[1]
Compares the content and mode of blobs found via two tree objects

git-for-each-ref[1]
Output information on each ref

git-for-each-repo[1]
Run a Git command on a list of repositories

git-get-tar-commit-id[1]
Extract commit ID from an archive created using git-archive

git-ls-files[1]
Show information about files in the index and the working tree

git-ls-remote[1]
List references in a remote repository

git-ls-tree[1]
List the contents of a tree object

git-merge-base[1]
Find as good common ancestors as possible for a merge

git-name-rev[1]
Find symbolic names for given revs

git-pack-redundant[1]
Find redundant pack files

git-rev-list[1]
Lists commit objects in reverse chronological order

git-rev-parse[1]
Pick out and massage parameters

git-show-index[1]
Show packed archive index

git-show-ref[1]
List references in a local repository

git-unpack-file[1]
Creates a temporary file with a blobs contents

git-var[1]
Show a Git logical variable

git-verify-pack[1]
Validate packed Git archive files

In general, the interrogate commands do not touch the files in the working tree.

Syncing repositories
git-daemon[1]
A really simple server for Git repositories

git-fetch-pack[1]
Receive missing objects from another repository

git-http-backend[1]
Server side implementation of Git over HTTP

git-send-pack[1]
Push objects over Git protocol to another repository

git-update-server-info[1]
Update auxiliary info file to help dumb servers

The following are helper commands used by the above; end users typically do not use them directly.

git-http-fetch[1]
Download from a remote Git repository via HTTP

git-http-push[1]
Push objects over HTTP/DAV to another repository

git-receive-pack[1]
Receive what is pushed into the repository

git-shell[1]
Restricted login shell for Git-only SSH access

git-upload-archive[1]
Send archive back to git-archive

git-upload-pack[1]
Send objects packed back to git-fetch-pack

Internal helper commands
These are internal helper commands used by other commands; end users typically do not use them directly.

git-check-attr[1]
Display gitattributes information

git-check-ignore[1]
Debug gitignore / exclude files

git-check-mailmap[1]
Show canonical names and email addresses of contacts

git-check-ref-format[1]
Ensures that a reference name is well formed

git-column[1]
Display data in columns

git-credential[1]
Retrieve and store user credentials

git-credential-cache[1]
Helper to temporarily store passwords in memory

git-credential-store[1]
Helper to store credentials on disk

git-fmt-merge-msg[1]
Produce a merge commit message

git-hook[1]
Run git hooks

git-interpret-trailers[1]
Add or parse structured information in commit messages

git-mailinfo[1]
Extracts patch and authorship from a single e-mail message

git-mailsplit[1]
Simple UNIX mbox splitter program

git-merge-one-file[1]
The standard helper program to use with git-merge-index

git-patch-id[1]
Compute unique ID for a patch

git-sh-i18n[1]
Gits i18n setup code for shell scripts

git-sh-setup[1]
Common Git shell script setup code

git-stripspace[1]
Remove unnecessary whitespace

Guides
The following documentation pages are guides about Git concepts.

gitcore-tutorial[7]
A Git core tutorial for developers

gitcredentials[7]
Providing usernames and passwords to Git

gitcvs-migration[7]
Git for CVS users

gitdiffcore[7]
Tweaking diff output

giteveryday[7]
A useful minimum set of commands for Everyday Git

gitfaq[7]
Frequently asked questions about using Git

gitglossary[7]
A Git Glossary

gitnamespaces[7]
Git namespaces

gitremote-helpers[7]
Helper programs to interact with remote repositories

gitsubmodules[7]
Mounting one repository inside another

gittutorial[7]
A tutorial introduction to Git

gittutorial-2[7]
A tutorial introduction to Git: part two

gitworkflows[7]
An overview of recommended workflows with Git`

export const repository = `Repository, command and file interfaces
This documentation discusses repository and command interfaces which users are expected to interact with directly. See --user-formats in git-help[1] for more details on the criteria.

gitattributes[5]
Defining attributes per path

gitcli[7]
Git command-line interface and conventions

githooks[5]
Hooks used by Git

gitignore[5]
Specifies intentionally untracked files to ignore

gitmailmap[5]
Map author/committer names and/or E-Mail addresses

gitmodules[5]
Defining submodule properties

gitrepository-layout[5]
Git Repository Layout

gitrevisions[7]
Specifying revisions and ranges for Git`

export const others = `File formats, protocols and other developer interfaces
This documentation discusses file formats, over-the-wire protocols and other git developer interfaces. See --developer-interfaces in git-help[1].

gitformat-bundle[5]
The bundle file format

gitformat-chunk[5]
Chunk-based file formats

gitformat-commit-graph[5]
Git commit-graph format

gitformat-index[5]
Git index format

gitformat-pack[5]
Git pack format

gitformat-signature[5]
Git cryptographic signature formats

gitprotocol-capabilities[5]
Protocol v0 and v1 capabilities

gitprotocol-common[5]
Things common to various protocols

gitprotocol-http[5]
Git HTTP-based protocols

gitprotocol-pack[5]
How packs are transferred over-the-wire

gitprotocol-v2[5]
Git Wire Protocol, Version 2`


