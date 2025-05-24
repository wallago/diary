import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import dedent from "dedent";

const common_commits = [
  { type: "feat", purpose: "A new feature" },
  { type: "fix", purpose: "A bug fix" },
  { type: "docs", purpose: "Documentation only changes" },
  {
    type: "style",
    purpose: "Changes that do not affect the meaning of the code",
  },
  {
    type: "refactor",
    purpose: "A code change that neither fixes a bug nor adds a feature",
  },
  { type: "perf", purpose: "A code change that improves performance" },
  {
    type: "test",
    purpose: "Adding missing tests or correcting existing tests",
  },
  { type: "chore", purpose: "Changes to the build process or auxiliary tools" },
  { type: "ci", purpose: "Adding missing Continuous integration" },
  { type: "wip", purpose: "Work in progress" },
  { type: "temp", purpose: "Temporary commit, usually squashed later" },
  { type: "security", purpose: "Security-related changes" },
  { type: "release", purpose: "Create or update a release" },
];

export default function Commit() {
  return (
    <div>
      <h2 className="text-xl font-bold">Conventional Commit Format</h2>
      <p className="mt-2">
        Defines a standard way of writing commit messages that helps automate
        versioning and changelogs.
      </p>
      <CodeBlock>{"<type>[optional scope]: <description>"}</CodeBlock>
      <p>Example:</p>
      <CodeBlock>{"feat(auth): add login with GitHub"}</CodeBlock>
      <div className="pt-2">
        <h2 className="text-xl font-bold">Common Commit Types</h2>
      </div>
      <Table className="w-100">
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-32">Type</TableHead>
            <TableHead>Purpose</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {common_commits.map((item, id) => (
            <TableRowItem key={id} type={item.type} purpose={item.purpose} />
          ))}
        </TableBody>
      </Table>
      <div className="pt-4">
        <h2 className="text-xl font-bold">TIPS</h2>
      </div>
      <div className="pt-4">
        <h3 className="text-lg font-bold">BREAKING CHANGE</h3>
      </div>
      <p>
        Commit message with <CodeLine>!</CodeLine> to draw attention to breaking
        change, example:
      </p>
      <CodeBlock>
        {"feat(api)!: send an email to the customer when a product is shipped"}
      </CodeBlock>
      <div className="pb-1">
        <h3 className="text-lg font-bold">Revert</h3>
      </div>
      <p>
        Commit message with <CodeLine>revert</CodeLine> to draw attention to
        revert previous commit, example:
      </p>
      <CodeBlock>
        {`revert: revert "feat(login): add password strength meter"`}
      </CodeBlock>
      <div className="pt-2">
        <h2 className="text-xl font-bold">Full Example</h2>
      </div>
      <CodeBlock>
        {dedent(`
    feat(parser): add support for new syntax
    fix(login): handle expired tokens correctly
    chore(deps): update all Nix flake inputs
    docs(contributing): add code style guide
    style(button): align icon properly
    refactor(auth): extract token validation logic
    perf(list): optimize rendering of long lists
    test(api): add test for edge case 500
    ci(workflow): add linting step to CI
    revert: "feat(login): add password strength meter"
  `)}
      </CodeBlock>
    </div>
  );
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="my-6 p-4 bg-secondary rounded inline-block max-w-fit overflow-x-auto text-xs text-primary leading-relaxed">
      <code>{children}</code>
    </pre>
  );
}

function CodeLine({ children }: { children: React.ReactNode }) {
  return (
    <code className="bg-secondary text-xs text-primary my-4 p-1 rounded">
      {children}
    </code>
  );
}

function TableRowItem({ type, purpose }: { type: string; purpose: string }) {
  return (
    <TableRow className="hover:bg-transparent">
      <TableCell>
        <CodeLine>{type}</CodeLine>
      </TableCell>
      <TableCell>{purpose}</TableCell>
    </TableRow>
  );
}
