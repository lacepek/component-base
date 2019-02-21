declare abstract class Configurable {
    [key: string]: any;
    configure(config: any): void;
    protected setDefaultProps(): void;
}
export default Configurable;
