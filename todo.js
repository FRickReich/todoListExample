/**
 * @class Todo
 * @description
 * @example
 * const todoList = new Todo();
 */
class Todo
{
    /**
     * @constructor
     * @param { array } entries 
     */
    constructor(entries = [])
    {
        this.entries = entries;
    }

    /**
     * @method addEntry();
     * @description Fügt einen Eintrag mit einer id und beschreibung hinzu.
     * @param { number }
     * @param { string }
     * @returns { object }
     */
    addEntry(id, description)
    {
        const newItem = { id, description, isFinished: false }
        this.entries.push(newItem);
        
        return newItem;
    }

    /**
     * @method deleteEntry();
     * @description Löscht einen Todo eintrag, anhand eines id strings.
     * @param { number } 
     * @returns { object }
     */
    deleteEntry(id)
    {
        let selectedEntry;

        for (let i = 0; i < this.entries.length; i++) {
            if(this.entries[i].id === id)
            {
                selectedEntry = this.entries[i];
                delete this.entries[i];
            }
        }
   
        return selectedEntry;
    }

    /**
     * @method setEntryState();
     * @description Stellt den beendigungsstatus eines eintrages ein.
     * @param { number } id 
     * @param { boolean } state
     * @returns { object }
     */
    setEntryState(id, state)
    {        
        this.entries.forEach(entry =>
        {
            if(entry.id === id)
            {
                entry.isFinished = state;
            }
        });
                
        return this.entries.find(entry => entry.id === id);
    }

    /**
     * @method setEntryDescription();
     * @description Stellt die Beschreibung eines eintrages ein.
     * @param { number } id 
     * @param { string } description
     * @returns { object }
     */
    setEntryDescription(id, description)
    {        
        this.entries.forEach(entry =>
        {
            if(entry.id === id)
            {
                entry.description = description;
            }
        });
                
        return this.entries.find(entry => entry.id === id);
    }

    /**
     * @methid getAllEntries();
     * @description Gibt eine array mit allen einträgen zurück.
     * @returns { Array }
     */
    getAllEntries()
    {
        return this.entries;
    }

    /**
     * @methid getFinishedEntries();
     * @description Gibt eine array mit allen fertigen einträgen zurück.
     * @returns { Array }
     */
    getFinishedEntries()
    {
        return this.entries.filter(entry => entry.isFinished === true);
    }
    
    /**
     * @methid getUnfinishedEntries();
     * @description Gibt eine array mit allen unfertigne einträgen zurück.
     * @returns { Array }
     */
    getUnfinishedEntries()
    {
        return this.entries.filter(entry => entry.isFinished === false);
    }
}

// module.exports = Todo;