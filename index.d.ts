type RouteTitleToken =
  | string
  | (() => string)
  | (() => string[])
  | (() => Promise<string>)
  | (() => Promise<string[]>);
declare module "ember" {
  /**
   * NOTE: because of the way @types/ember works,
   * merging a few properties into the Ember.Route interface
   * will also result in the @ember/routing/route default export
   * having these properties too.
   * -- @mike-north
   */
  namespace Ember {
    interface Route {
      titleToken: RouteTitleToken;
      title: string | ((tokens: string[]) => string);
      setTitle: (title: string) => void;
    }
  }
}
