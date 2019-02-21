abstract class Configurable
{
  [key: string]: any;

  public configure(config: any)
  {
    for (const property in config) {
      if (config.hasOwnProperty(property)) {
        this[property] = config[property];
      }
    }
  }

  protected setDefaultProps(): void { }
}

export default Configurable;