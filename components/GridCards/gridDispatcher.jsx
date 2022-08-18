import React from "react";
import ShopCard from "./shopCard";

export default class GridDispatcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gridList: props.gridList,
            items: []
        };
        this.switchType()
    }

    switchType() {
        let tmpArr = []
        var c = 0
        if ('collection_shops' in this.state.gridList) {
            this.state.gridList.collection_shops.data.forEach(element => {
                tmpArr.push(<ShopCard key={c} content={element}></ShopCard>)
                c += 1
            });
        }
        /* TODO: Añadir más elementos de lista
        .
        ..
        ...
        */

        this.state.items = tmpArr
    }

    render() {
        const { items } = this.state
        return (
            <>
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
                    {items}
                </div>
            </>
        );
    }
}