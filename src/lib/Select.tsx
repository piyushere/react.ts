import React from 'react';
import cx from 'clsx';
import clsx from 'clsx';

const Select = () => {
  const [value, setValue] = React.useState('');
  const [focused, setFocused] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const options = [
    'hello owrld',
    'hakena matata',
    'ghost in shell',
    'neon genesis evangelion',
    'toradora',
    'hunter x hunter',
    'terror in resonance',
    'tokyo ghoul',
    'naruto',
    'bleach',
  ];

  return (
    <div>
      <label className="flex relative h-9 shadow-md">
        <span
          className={cx(
            'absolute text-zinc-400 h-9 leading-9 left-3 transition-transform ease-out transform duration-200 origin-left',
            value && '-translate-y-7 scale-75 text-zinc-400 outline-red-400'
          )}
        >
          Favourite Anime
        </span>
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(false), setActive(0);
          }}
          onKeyDown={(event) => {
            switch (event.key) {
              case 'ArrowDown':
                setActive((option) => (option + 1) % options.length);
                break;
              case 'ArrowUp':
                setActive((option) =>
                  option === 0 ? options.length - 1 : option - 1
                );
                break;
              default:
            }
          }}
          type="email"
          className="bg-zinc-900 rounded-lg text-zinc-400"
        />
        {focused && (
          <Options
            className="absolute translate-y-12 w-full text-zinc-400 bg-zinc-800 rounded-md max-h-[8rem] overflow-auto scroll-smooth"
            options={options}
            selected={active}
          />
        )}
      </label>
    </div>
  );
};

const Options = ({
  className,
  options,
  selected,
}: {
  className: string;
  options: string[];
  selected: number;
}) => {
  const [option, setOption] = React.useState(0);
  const optionsContainer = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    optionsContainer.current
      ?.querySelector('option.active')
      ?.scrollIntoView({ block: 'end' });
  }, [selected]);
  return (
    <div className={className} ref={optionsContainer}>
      {options.map((x, index) => (
        <option
          key={x}
          className={clsx(
            'p-2 text-inherit text-start transition-colors duration-300 ease-in-out',
            selected === index && 'text-zinc-100 bg-blue-900 active'
          )}
          value="hello world"
        >
          {x}
        </option>
      ))}
    </div>
  );
};
export default Select;
