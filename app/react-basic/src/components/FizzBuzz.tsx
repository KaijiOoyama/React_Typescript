import { memo, useState } from "react"

type FizzProps = {
    isFizz: boolean
}
type BuzzProps = {
    isBuzz: boolean
}

const Fizz = memo<FizzProps>((props) => {
    const {isFizz} = props
    console.log('Fizzが再描画されました。')
    return <span>{isFizz ? 'Fizz' : ''}</span>
})

const Buzz = memo<BuzzProps>((props) => {
    const {isBuzz} = props
    console.log('Buzzが再描画されました。')
    return <span>{isBuzz ? 'Buzz' : ''}</span>
})

export const FizzBuzz = () => {
    const [count, setCount] = useState(1);
    const isFizz = count % 3 === 0
    const isBuzz = count % 5 === 0

    console.log('FIZZBUZZが再描画されました')

    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>+1</button>
            <p>現在のカウント: {count}</p>
            <p>
                <Fizz isFizz={isFizz} />
                <Buzz isBuzz={isBuzz} />
            </p>
        </div>
    )
}