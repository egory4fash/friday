import React from 'react'
import SuperButton from "../SuperButton/SuperButton";
import SuperCheckbox from "../SuperCheckbox/SuperCheckbox";
import SuperEditableSpan from "../SuperEditableSpan/SuperEditableSpan";
import SuperInputText from "../SuperInputText/SuperInputText";
import SuperRadio from "../SuperRadio/SuperRadio";
import SuperSelect from "../SuperSelect/SuperSelect";

export const Test = () => {
    return (
        <>
            <div>
                <SuperButton>TestButton</SuperButton>
            </div>
            <div>
                <SuperCheckbox/>
            </div>
            <div>
                <SuperEditableSpan
                    value={'test editable span'} />
            </div>
            <div>
                <SuperInputText
                placeholder={'test input'}/>
            </div>
            <div>
                <SuperRadio
                    options={[1,2,3]}/>
            </div>
            <div>
                <SuperSelect
                    options={[1,2,3]}/>
            </div>
        </>
    )
}