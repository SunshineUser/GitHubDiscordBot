export const addDescription =`This command updates the index using the current content found in the working tree, to prepare the content staged for the next commit. It typically adds the current content of existing paths as a whole, but with some options it can also be used to add content with only part of the changes made to the working tree files applied, or remove paths that do not exist in the working tree anymore.

The "index" holds a snapshot of the content of the working tree, and it is this snapshot that is taken as the contents of the next commit. Thus after making any changes to the working tree, and before running the commit command, you must use the add command to add any new or modified files to the index.

This command can be performed multiple times before a commit. It only adds the content of the specified file(s) at the time the add command is run; if you want subsequent changes included in the next commit, then you must run git add again to add the new content to the index.

The git status command can be used to obtain a summary of which files have changes that are staged for the next commit.

The git add command will not add ignored files by default. If any ignored files were explicitly specified on the command line, git add will fail with a list of ignored files. Ignored files reached by directory recursion or filename globbing performed by Git (quote your globs before the shell) will be silently ignored. The git add command can be used to add ignored files with the -f (force) option.

Please see git-commit[1] for alternative ways to add content to a commit.`



export const addOptions = ()=>{
switch (options) {
    case "<pathspec>…​":
      return "Files to add content from. Fileglobs (e.g. *.c) can be given to add all matching files. Also a leading directory name (e.g. dir to add dir/file1 and dir/file2) can be given to update the index to match the current state of the directory as a whole (e.g. specifying dir will record not just a file dir/file1 modified in the working tree, a file dir/file2 added to the working tree, but also a file dir/file3 removed from the working tree). Note that older versions of Git used to ignore removed files; use --no-all option if you want to add modified or new files but ignore removed ones.";
    case "-n":
      return "--dry-run: Don’t actually add the file(s), just show if they exist and/or will be ignored.";
    case "-v":
      return "--verbose: Be verbose.";
    case "-f":
      return "--force: Allow adding otherwise ignored files.";
    case "--sparse":
      return "Allow updating index entries outside of the sparse-checkout cone. Normally, git add refuses to update index entries whose paths do not fit within the sparse-checkout cone, since those files might be removed from the working tree without warning. See git-sparse-checkout[1] for more details.";
    case "-i":
      return "--interactive: Add modified contents in the working tree interactively to the index. Optional path arguments may be supplied to limit operation to a subset of the working tree. See “Interactive mode” for details.";
    case "-p":
      return "--patch: Interactively choose hunks of patch between the index and the work tree and add them to the index. This gives the user a chance to review the difference before adding modified contents to the index.";
    case "-e":
      return "--edit: Open the diff vs. the index in an editor and let the user edit it. After the editor was closed, adjust the hunk headers and apply the patch to the index.";
    case "-u":
      return "--update: Update the index just where it already has an entry matching <pathspec>. This removes as well as modifies index entries to match the working tree, but adds no new files.";
    case "-A":
      return "--all: Update the index not only where the working tree has a file matching <pathspec> but also where the index already has an entry. This adds, modifies, and removes index entries to match the working tree.";
    case "--no-all":
      return "--ignore-removal: Update the index by adding new files that are unknown to the index and files modified in the working tree, but ignore files that have been removed from the working tree.";
    case "-N":
      return "--intent-to-add: Record only the fact that the path will be added later. An entry for the path is placed in the index with no content.";
    case "--refresh":
      return "Don’t add the file(s), but only refresh their stat() information in the index.";
    case "--ignore-errors":
      return "If some files could not be added because of errors indexing them, do not abort the operation, but continue adding the others. The command shall still exit with non-zero status. The configuration variable add.ignoreErrors can be set to true to make this the default behaviour.";
    case "--ignore-missing":
      return "This option can only be used together with --dry-run. By using this option the user can check if any of the given files would be ignored, no matter if they are already present in the work tree or not.";
    case "--no-warn-embedded-repo":
      return "By default, git add will warn when adding an embedded repository to the index without using git submodule add to create an entry in .gitmodules. This option will suppress the warning (e.g., if you are manually performing operations on submodules).";
    case "--renormalize":
      return "Apply the "+`clean`+" process freshly to all tracked files to forcibly add them again to the index. This is useful after changing core.autocrlf configuration or the text attribute in order to correct files added with wrong CRLF/LF line endings. This option implies -u. Lone CR characters are untouched, thus while a CRLF cleans to LF, a CRCRLF sequence is only partially cleaned to CRLF."
    case "--chmod=(+|-)x":
      return "Override the executable bit of the added files. The executable bit is only changed in the index, the files on disk are left unchanged.";
    case "--pathspec-from-file=<file>":
      return "Pathspec is passed in <file> instead of commandline args. If <file> is exactly - then standard input is used. Pathspec elements are separated by LF or CR/LF. Pathspec elements can be quoted as explained for the configuration variable core.quotePath (see git-config[1]). See also --pathspec-file-nul and global --literal-pathspecs.";
    case "--pathspec-file-nul":
      return "Only meaningful with --pathspec-from-file. Pathspec elements are separated with NUL character and all other characters are taken literally (including newlines and quotes).";
    case "--":
      return "This option can be used to separate command-line options from the list of files, (useful when filenames might be mistaken for command-line options).";
    default: "this is not a valid add command, check your casing and spacing";
}}