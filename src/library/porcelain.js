const porcelainCommands =` 
Main porcelain commands
git-add[1]
Add file contents to the index

git-am[1]
Apply a series of patches from a mailbox

git-archive[1]
Create an archive of files from a named tree

git-bisect[1]
Use binary search to find the commit that introduced a bug

git-branch[1]
List, create, or delete branches

git-bundle[1]
Move objects and refs by archive

git-checkout[1]
Switch branches or restore working tree files

git-cherry-pick[1]
Apply the changes introduced by some existing commits

git-citool[1]
Graphical alternative to git-commit

git-clean[1]
Remove untracked files from the working tree

git-clone[1]
Clone a repository into a new directory

git-commit[1]
Record changes to the repository

git-describe[1]
Give an object a human readable name based on an available ref

git-diff[1]
Show changes between commits, commit and working tree, etc

git-fetch[1]
Download objects and refs from another repository

git-format-patch[1]
Prepare patches for e-mail submission

git-gc[1]
Cleanup unnecessary files and optimize the local repository

git-grep[1]
Print lines matching a pattern

git-gui[1]
A portable graphical interface to Git

git-init[1]
Create an empty Git repository or reinitialize an existing one

git-log[1]
Show commit logs

git-maintenance[1]
Run tasks to optimize Git repository data

git-merge[1]
Join two or more development histories together

git-mv[1]
Move or rename a file, a directory, or a symlink

git-notes[1]
Add or inspect object notes

git-pull[1]
Fetch from and integrate with another repository or a local branch

git-push[1]
Update remote refs along with associated objects

git-range-diff[1]
Compare two commit ranges (e.g. two versions of a branch)

git-rebase[1]
Reapply commits on top of another base tip

git-reset[1]
Reset current HEAD to the specified state

git-restore[1]
Restore working tree files

git-revert[1]
Revert some existing commits

git-rm[1]
Remove files from the working tree and from the index

git-shortlog[1]
Summarize git log output

git-show[1]
Show various types of objects

git-sparse-checkout[1]
Reduce your working tree to a subset of tracked files

git-stash[1]
Stash the changes in a dirty working directory away

git-status[1]
Show the working tree status

git-submodule[1]
Initialize, update or inspect submodules

git-switch[1]
Switch branches

git-tag[1]
Create, list, delete or verify a tag object signed with GPG

git-worktree[1]
Manage multiple working trees

gitk[1]
The Git repository browser

scalar[1]
A tool for managing large Git repositories

Ancillary Commands
Manipulators:

git-config[1]
Get and set repository or global options

git-fast-export[1]
Git data exporter

git-fast-import[1]
Backend for fast Git data importers

git-filter-branch[1]
Rewrite branches

git-mergetool[1]
Run merge conflict resolution tools to resolve merge conflicts

git-pack-refs[1]
Pack heads and tags for efficient repository access

git-prune[1]
Prune all unreachable objects from the object database

git-reflog[1]
Manage reflog information

git-remote[1]
Manage set of tracked repositories

git-repack[1]
Pack unpacked objects in a repository

git-replace[1]
Create, list, delete refs to replace objects

Interrogators:

git-annotate[1]
Annotate file lines with commit information

git-blame[1]
Show what revision and author last modified each line of a file

git-bugreport[1]
Collect information for user to file a bug report

git-count-objects[1]
Count unpacked number of objects and their disk consumption

git-diagnose[1]
Generate a zip archive of diagnostic information

git-difftool[1]
Show changes using common diff tools

git-fsck[1]
Verifies the connectivity and validity of the objects in the database

git-help[1]
Display help information about Git

git-instaweb[1]
Instantly browse your working repository in gitweb

git-merge-tree[1]
Perform merge without touching index or working tree

git-rerere[1]
Reuse recorded resolution of conflicted merges

git-show-branch[1]
Show branches and their commits

git-verify-commit[1]
Check the GPG signature of commits

git-verify-tag[1]
Check the GPG signature of tags

git-version[1]
Display version information about Git

git-whatchanged[1]
Show logs with difference each commit introduces

gitweb[1]
Git web interface (web frontend to Git repositories)

Interacting with Others
These commands are to interact with foreign SCM and with other people via patch over e-mail.

git-archimport[1]
Import a GNU Arch repository into Git

git-cvsexportcommit[1]
Export a single commit to a CVS checkout

git-cvsimport[1]
Salvage your data out of another SCM people love to hate

git-cvsserver[1]
A CVS server emulator for Git

git-imap-send[1]
Send a collection of patches from stdin to an IMAP folder

git-p4[1]
Import from and submit to Perforce repositories

git-quiltimport[1]
Applies a quilt patchset onto the current branch

git-request-pull[1]
Generates a summary of pending changes

git-send-email[1]
Send a collection of patches as emails

git-svn[1]
Bidirectional operation between a Subversion repository and Git

Reset, restore and revert
There are three commands with similar names: git reset, git restore and git revert.

git-revert[1] is about making a new commit that reverts the changes made by other commits.

git-restore[1] is about restoring files in the working tree from either the index or another commit. This command does not update your branch. The command can also be used to restore files in the index from another commit.

git-reset[1] is about updating your branch, moving the tip in order to add or remove commits from the branch. This operation changes the commit history.

git reset can also be used to restore the index, overlapping with git restore.`

export default porcelainCommands