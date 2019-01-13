import * as React from "react";

interface InnerComponentProperties {}

interface InnerComponentState {}

export class InnerComponent extends React.Component<InnerComponentProperties, InnerComponentState> {

    state = {
        a: 5
    }

    a = 5;
    private b = 6;
    protected c = 0;
    static d = 8;
    public readonly e = 9;

    
    componentDidMount() {
        const test = new InnerComponent({});
        const instantiated = new Instantiated({});
        // instantiated
        // test.state.a
        console.log(test);
        console.log(instantiated.c);
    }

    render() {
        const test = new InnerComponent({});
        const instantiated = new Instantiated({});
        return <div>{instantiated.a1}</div>;
    }
}

class Instantiated extends InnerComponent {
    a1 = this.c;
    private b1 = this.c;
    protected c2 = 77;
    static d = 88;
}
