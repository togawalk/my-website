export class GitUrlParser {
  private pattern = /(?:https?:\/\/)?([^/]+)\/([^/]+)\/([^/]+)/;
  private link: string;
  private match: RegExpMatchArray | null;

  constructor(link: string) {
    this.link = link;
    this.match = this.link.match(this.pattern);

    if (!this.match) {
      throw new Error("Invalid link format");
    }
  }

  extractUsername = (): string | null => {
    return this.match ? this.match[2] : null;
  };

  extractDomain = (): string | null => {
    return this.match ? this.match[1] : null;
  };

  extractRepository = (): string | null => {
    return this.match ? this.match[3] : null;
  };

  extractAll = (): [string, string, string] | [] => {
    if (this.match) {
      const [, domain, username, repository] = this.match;
      return [domain, username, repository];
    } else {
      return [];
    }
  };
}
