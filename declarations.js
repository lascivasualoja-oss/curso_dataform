const tables = [
    {name: "distribution_centers", database: "winged-helper-480913-h6", schema: "curso_dataform"},
    {name: "events", database: "winged-helper-480913-h6", schema: "curso_dataform"},
    {name: "order_items", database: "winged-helper-480913-h6", schema: "curso_dataform"},
    {name: "orders", database: "winged-helper-480913-h6", schema: "curso_dataform"},
    {name: "users", database: "winged-helper-480913-h6", schema: "curso_dataform"},
    {name: "products", database: "winged-helper-480913-h6", schema: "curso_dataform"}
]

function generateTableDeclarations() {
    tables.forEach(table => {
        declare({
            type: "declaration",
            schema: table.schema,
            name: table.name,
            database: table.database
        })
    })
}

generateTableDeclarations();