export default function CoordinateNotes({ coordinates, setCoordinates }){
    const handleNoteChange = (index, value) => {
        const updated = [...coordinates];
        updated[index].note = value;
        setCoordinates(updated);
    };

    const handleRemove = (index) => {
        const updated = [...coordinates];
        updated.splice(index, 1);
        setCoordinates(updated);
    };

    return(
        <div className="p-4 border rounded bg-gray-50">
            <h3 className="mb-2 font-semibold">Notes when clicked</h3>
            {coordinates.length === 0 && (
                <p className="text-sm text-gray-500 italic">No points clicked yet.</p>
            )}
            <div className="space-y-2">
                {coordinates.map((coord, index) => (
                    <div
                    key={index}
                    className="grid grid-cols-5 items-center gap-2 bg-white p-2 border rounded"
                    >
                        <div className="text-xs text-center">Pg {coord.page}</div>
                        <div className="text-xs text-center">X: {coord.x}</div>
                        <div className="text-xs text-center">Y: {coord.y}</div>
                        <input
                            type="text"
                            value={coord.note}
                            onChange={(e) => handleNoteChange(index, e.target.value)}
                            placeholder="Add note"
                            className="text-sm px-1 py-0.5 border rounded"
                        />
                        <button
                            onClick={() => handleRemove(index)}
                            className="text-sm px-2 py-0.5 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
