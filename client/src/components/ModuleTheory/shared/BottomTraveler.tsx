

interface BottomTravelerProps {
  tagId: string
  reversed: boolean
}

export function BottomTraveler({tagId, reversed}: BottomTravelerProps) {
    return <>
        <a 
            href={tagId} 
            style={
                { 
                    position: 'relative', 
                    top: '0%', left: '97%', 
                    fontSize: '1.66rem', 
                    margin: '0', padding: '0', boxSizing: 'border-box',
                    textShadow: '0 0 .5rem #222'  
                }}>
        {!reversed ? '👇🏻' : '👆🏻'}</a>
    </>
}
