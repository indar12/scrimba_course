import React, { useState, useTransition, type ChangeEvent } from 'react';

const Transition: React.FC = () => {
    const defaultValues: number[] = [1, 2, 3, 4, 5];
    const [name, setName] = useState<string>('');
    const [list, setList] = useState<(number | string)[]>(defaultValues);
    const [isPending, startTransition] = useTransition();
    const sizeOfList = 10000;

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        setName(value);
        startTransition(() => {
            const data: (string | number)[] = [];
            for (let i = 0; i < sizeOfList; i++) {
                data[i] = value;
            }

            setList(data);
        })
    };

    return (
        <div>
            <input type="text" value={name} onChange={handleChange} />
            {
                isPending ? (
                    <div>Loading...</div>
                ) : (
                    list.map((item, index) => (
                        <div key={index}>
                            List items: {item}
                        </div>
                    ))
                )
            }
        </div>
    );
};

export default Transition;
