// Wood Species Catalog Application
class WoodSpeciesCatalog {
    constructor() {
        // Complete data with all 112 species from the provided JSON (removing duplicates if any)
        this.speciesData = {"species": [{"id": "1A", "name": "Blackbean", "scientific": "Castanospermum australe", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Flooring"], "price": "B", "origin": "Australian", "category": "australian"}, {"id": "2A", "name": "Silver Ash", "scientific": "Flindersia spp.", "availability": "Usually in stock", "applications": ["Furniture", "Musical Instruments", "Turnery", "Boat Building", "Flooring"], "price": "B", "origin": "Australian", "category": "australian"}, {"id": "3A", "name": "Myrtle", "scientific": "Nothofagus cunninghamii", "availability": "Usually in stock", "applications": ["Furniture", "Turnery"], "price": "B", "origin": "Australian", "category": "australian"}, {"id": "4A", "name": "Rose Alder", "scientific": "Caldcluvia australiensis", "availability": "Usually in stock", "applications": ["Furniture", "Turnery"], "price": "A", "origin": "Australian", "category": "australian"}, {"id": "5A", "name": "Tallowwood", "scientific": "Eucalyptus microcorys", "availability": "Usually in stock", "applications": ["Furniture", "Flooring"], "price": "A", "origin": "Australian", "category": "australian"}, {"id": "6A", "name": "Mulga", "scientific": "Acacia aneura", "availability": "Usually in stock", "applications": ["Furniture", "Musical Instruments", "Turnery"], "price": "B", "origin": "Australian", "category": "australian"}, {"id": "7A", "name": "Camphor Laurel", "scientific": "Cinnamomum camphorum", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Carvery"], "price": "C", "origin": "Australian", "category": "australian"}, {"id": "8A", "name": "Tasmanian Oak", "scientific": "Eucalyptus obliqua/regnans", "availability": "Usually in stock", "applications": ["Furniture", "Flooring"], "price": "B", "origin": "Australian", "category": "australian"}, {"id": "9A", "name": "Cypress Pine", "scientific": "Callitris glacua", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Flooring"], "price": "A", "origin": "Australian", "category": "australian"}, {"id": "10A", "name": "Tasmanian Blackwood", "scientific": "Acacia melanoxylon", "availability": "Usually in stock", "applications": ["Furniture", "Musical Instruments", "Turnery", "Flooring"], "price": "B", "origin": "Australian", "category": "australian"}, {"id": "11A", "name": "Huon Pine", "scientific": "Dacrydium franklinii", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Carvery", "Boat Building"], "price": "C", "origin": "Australian", "category": "australian", "protected": true}, {"id": "12A", "name": "Celery Top Pine", "scientific": "Phyllocladus asplenifolius", "availability": "Available on request", "applications": ["Furniture", "Turnery", "Boat Building", "Flooring"], "price": "C", "origin": "Australian", "category": "australian"}, {"id": "14A", "name": "W.A. She Oak", "scientific": "Casuarina fraserana", "availability": "Usually in stock", "applications": ["Furniture", "Turnery"], "price": "C", "origin": "Australian", "category": "australian"}, {"id": "15A", "name": "Australian Cedar", "scientific": "Cedrela toona toonaaustralis", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Carvery", "Boat Building"], "price": "D", "origin": "Australian", "category": "australian", "protected": true}, {"id": "16A", "name": "Qld Maple", "scientific": "Flindersia brayleyana", "availability": "Usually in stock", "applications": ["Furniture", "Musical Instruments", "Turnery", "Carvery", "Boat Building"], "price": "B", "origin": "Australian", "category": "australian"}, {"id": "17A", "name": "Qld Silky Oak", "scientific": "Cardwellia sublimis", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Flooring"], "price": "D", "origin": "Australian", "category": "australian"}, {"id": "18A", "name": "Qld Walnut", "scientific": "Endiandra palmerstonii", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Carvery", "Flooring"], "price": "C", "origin": "Australian", "category": "australian"}, {"id": "19A", "name": "Satin Sycamore", "scientific": "Ceratopetalum succirubium", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Flooring"], "price": "B", "origin": "Australian", "category": "australian"}, {"id": "20A", "name": "Jarrah", "scientific": "Eucalyptus marginata", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Flooring"], "price": "B", "origin": "Australian", "category": "australian"}, {"id": "21A", "name": "N.S.W. Scented Rosewood", "scientific": "Dysoxylum fraseranum", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Carvery"], "price": "D", "origin": "Australian", "category": "australian"}, {"id": "22A", "name": "Qld Black Wattle", "scientific": "Acacia auriculiformis/mangium", "availability": "Usually in stock", "applications": ["Furniture", "Turnery"], "price": "B", "origin": "Australian", "category": "australian"}, {"id": "23A", "name": "Yellow Walnut", "scientific": "Beilschmiedia bancroftii", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Flooring"], "price": "B", "origin": "Australian", "category": "australian"}, {"id": "24A", "name": "Pepperwood (Brown Beech)", "scientific": "Cinnamomum laubatii", "availability": "Available on request", "applications": ["Furniture", "Turnery", "Carvery"], "price": "B", "origin": "Australian", "category": "australian"}, {"id": "25A", "name": "White Cheesewood", "scientific": "Wrightia laeuis (mullgar)", "availability": "Usually in stock", "applications": ["Turnery", "Carvery"], "price": "B", "origin": "Australian", "category": "australian"}, {"id": "26A", "name": "Blackbutt", "scientific": "Eucalyptus Pilularis", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Carvery", "Boat Building"], "price": "C", "origin": "Australian", "category": "australian"}, {"id": "27A", "name": "Karri", "scientific": "Eucalyptus diversicolor", "availability": "Available on request", "applications": ["Furniture", "Flooring"], "price": "A", "origin": "Australian", "category": "australian"}, {"id": "28A", "name": "Coachwood", "scientific": "Ceratopetalum apelatum", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Carvery"], "price": "C", "origin": "Australian", "category": "australian"}, {"id": "29A", "name": "King William Pine", "scientific": "Athrotaxis selaginoides", "availability": "Available on request", "applications": ["Furniture", "Boat Building"], "price": "D", "origin": "Australian", "category": "australian"}, {"id": "30A", "name": "Hoop Pine", "scientific": "Araucaria cunninghamii", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Boat Building"], "price": "A", "origin": "Australian", "category": "australian"}, {"id": "33A", "name": "Red Iron bark", "scientific": "Eucalvptus sideroxylon", "availability": "Available on request", "applications": ["Furniture", "Flooring"], "price": "A", "origin": "Australian", "category": "australian"}, {"id": "34A", "name": "Sydney Blue Gum", "scientific": "Eucalyptus saligna", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Flooring"], "price": "A", "origin": "Australian", "category": "australian"}, {"id": "35A", "name": "Brush Box", "scientific": "Tristania conferta", "availability": "Usually in stock", "applications": ["Furniture", "Flooring"], "price": "A", "origin": "Australian", "category": "australian"}, {"id": "36A", "name": "River Red Gum", "scientific": "Eucalyptus camadulensis", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Flooring"], "price": "B", "origin": "Australian", "category": "australian"}, {"id": "37A", "name": "Victorian Ash", "scientific": "Eucalyptus regnans", "availability": "Usually in stock", "applications": ["Furniture", "Flooring"], "price": "B", "origin": "Australian", "category": "australian"}, {"id": "38A", "name": "Red Tulip Oak", "scientific": "Argyrodendron peralatum", "availability": "Available on request", "applications": ["Furniture", "Flooring"], "price": "C", "origin": "Australian", "category": "australian"}, {"id": "39A", "name": "Qld Kauri", "scientific": "Agathis microstachya", "availability": "Available on request", "applications": ["Furniture", "Turnery", "Carvery", "Boat Building", "Flooring"], "price": "C", "origin": "Australian", "category": "australian"}, {"id": "40A", "name": "Bolly Silkwood (Tarzali)", "scientific": "Criptocarya oblata", "availability": "Available on request", "applications": ["Furniture", "Turnery", "Flooring"], "price": "B", "origin": "Australian", "category": "australian"}, {"id": "41A", "name": "Qld Leichhardt", "scientific": "Neonauclea gordoniana", "availability": "Usually in stock", "applications": ["Turnery", "Carvery", "Flooring"], "price": "C", "origin": "Australian", "category": "australian"}, {"id": "42A", "name": "Qld Narrow Leaf Wattle", "scientific": "Acacia (spp) aulacoarpa", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Flooring"], "price": "C", "origin": "Australian", "category": "australian"}, {"id": "43A", "name": "Flooded Gum", "scientific": "Eucalyptus grandis", "availability": "Usually in stock", "applications": ["Flooring"], "price": "B", "origin": "Australian", "category": "australian"}, {"id": "46A", "name": "Bunya Pine", "scientific": "Araucaria bidwillii", "availability": "Usually in stock", "applications": ["Furniture"], "price": "B", "origin": "Australian", "category": "australian"}, {"id": "47A", "name": "Northern Brush Mahogany", "scientific": "Geissois biagiana", "availability": "Usually in stock", "applications": ["Furniture"], "price": "C", "origin": "Australian", "category": "australian"}, {"id": "48A", "name": "Spotted Gum", "scientific": "Eucalyptus maculata", "availability": "Usually in stock", "applications": ["Furniture", "Boat Building", "Flooring"], "price": "B", "origin": "Australian", "category": "australian"}, {"id": "1", "name": "Teak", "scientific": "Tectona grandis", "origin": "Burma Thailand/Indonesia", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Carvery", "Boat Building"], "price": "D", "category": "imported"}, {"id": "2", "name": "Central American Mahogany", "scientific": "Swietenia macrophylla", "origin": "South America", "availability": "Usually in stock", "applications": ["Furniture", "Musical Instruments", "Turnery", "Carvery", "Boat Building", "Flooring"], "price": "C", "category": "imported"}, {"id": "3", "name": "New Guinea Cedar", "scientific": "Cedrela toona, toona sureni", "origin": "New Guinea", "availability": "Usually in stock", "applications": ["Furniture", "Musical Instruments", "Turnery", "Carvery", "Boat Building"], "price": "B", "category": "imported"}, {"id": "4", "name": "Malaysian Red Cedar", "scientific": "Toona sureni. cedrela serrata", "origin": "Malaysia", "availability": "Usually in stock", "applications": ["Furniture", "Musical Instruments", "Turnery", "Carvery", "Boat Building"], "price": "B", "category": "imported"}, {"id": "5", "name": "American White Ash", "scientific": "Fraxinus americana", "origin": "USA Canada", "availability": "Usually in stock", "applications": ["Furniture", "Musical Instruments", "Turnery", "Flooring"], "price": "C", "category": "imported"}, {"id": "6", "name": "Kwila (Merbau) (Vesi)", "scientific": "Intsia bijuga and palembanica", "origin": "SE Asia New Guinea", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Boat Building", "Flooring"], "price": "B", "category": "imported"}, {"id": "7", "name": "African Blackwood", "scientific": "Palbergia Melanoxylon", "origin": "Tanzania", "availability": "Usually in stock", "applications": ["Musical Instruments", "Turnery", "Carvery"], "price": "G", "category": "imported", "protected": true}, {"id": "8", "name": "Fijian Mahogany", "scientific": "Swietenia macrophylla", "origin": "Fiji", "availability": "Usually in stock", "applications": ["Furniture", "Musical Instruments", "Turnery", "Carvery", "Boat Building", "Flooring"], "price": "B", "category": "imported"}, {"id": "9", "name": "New Guinea Rosewood", "scientific": "Pterocarpus indicus", "origin": "New Guinea", "availability": "Usually in stock", "applications": ["Furniture", "Musical Instruments", "Turnery", "Boat Building", "Flooring"], "price": "B", "category": "imported", "protected": true}, {"id": "10", "name": "Japanese Beech", "scientific": "Fagas crenata", "origin": "Japan", "availability": "Available on request", "applications": ["Furniture", "Turnery", "Carvery"], "price": "C", "category": "imported"}, {"id": "11", "name": "White Beech (Solomon Island)", "scientific": "Gmelina salomonensis", "origin": "New Guinea", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Carvery", "Boat Building"], "price": "B", "category": "imported"}, {"id": "12", "name": "Sitka Spruce", "scientific": "Picea sitchensis", "origin": "USA Canada", "availability": "Usually in stock", "applications": ["Musical Instruments", "Boat Building"], "price": "D", "category": "imported"}, {"id": "13", "name": "Kauri. Damar Minyak", "scientific": "Agathis spp.", "origin": "S-E. Asia", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Carvery", "Boat Building", "Flooring"], "price": "B", "category": "imported"}, {"id": "14", "name": "Wenge", "scientific": "Millettia laurentii", "origin": "West Africa", "availability": "Usually in stock", "applications": ["Furniture", "Musical Instruments", "Turnery"], "price": "E", "category": "imported"}, {"id": "15", "name": "Cerejeira", "scientific": "Amburana cearensis", "origin": "Brazil", "availability": "Available on request", "applications": ["Furniture", "Turnery", "Flooring"], "price": "B", "category": "imported"}, {"id": "16", "name": "Balsa", "scientific": "Ochroma pyramidale", "origin": "Venezuela", "availability": "Usually in stock", "applications": ["Boat Building"], "price": "C", "category": "imported"}, {"id": "17", "name": "Lignum Vitae", "scientific": "Guaiacum spp.", "origin": "Central America", "availability": "Usually in stock", "applications": ["Musical Instruments", "Turnery", "Boat Building"], "price": "G", "category": "imported", "protected": true}, {"id": "18", "name": "Iroko", "scientific": "Chlorophora excelsa", "origin": "West Africa", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Boat Building"], "price": "B", "category": "imported"}, {"id": "19", "name": "Fijian Kauri", "scientific": "Agathis vitiensis", "origin": "Fiji", "availability": "Available on request", "applications": ["Furniture", "Turnery", "Carvery", "Boat Building"], "price": "B", "category": "imported"}, {"id": "22", "name": "Brazilian Walnut. Imbuia", "scientific": "Phoebe porosa", "origin": "Brazil", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Carvery"], "price": "C", "category": "imported"}, {"id": "23", "name": "New Guinea Pencil Cedar", "scientific": "Palaquium spp.", "origin": "New Guinea", "availability": "Usually in stock", "applications": ["Furniture", "Turnery"], "price": "B", "category": "imported"}, {"id": "24", "name": "Amazon Rosewood", "scientific": "Dalbergia spruceana", "origin": "Brazil", "availability": "Usually in stock", "applications": ["Furniture", "Musical Instruments", "Turnery"], "price": "G", "category": "imported", "protected": true}, {"id": "25", "name": "American White Oak", "scientific": "Quercus alba", "origin": "USA/Canada", "availability": "Usually in stock", "applications": ["Furniture", "Turnery"], "price": "C", "category": "imported"}, {"id": "26", "name": "American Black Walnut", "scientific": "Juglans nigra", "origin": "USA", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Carvery"], "price": "D", "category": "imported"}, {"id": "27", "name": "South American Cedar", "scientific": "Cedrela odorata", "origin": "South America", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Boat Building"], "price": "B", "category": "imported"}, {"id": "28", "name": "American Sycamore", "scientific": "Plantanus spp.", "origin": "USA", "availability": "Available on request", "applications": ["Furniture", "Musical Instruments", "Turnery", "Carvery"], "price": "B", "category": "imported"}, {"id": "29", "name": "Goncalo Alves", "scientific": "Astronium fraxinifolium", "origin": "Brazil", "availability": "Available on request", "applications": ["Furniture", "Turnery"], "price": "E", "category": "imported"}, {"id": "30", "name": "Ipe Amarilo", "scientific": "Tabebuia serratifolia", "origin": "Brazil", "availability": "Available on request", "applications": ["Furniture", "Flooring"], "price": "B", "category": "imported"}, {"id": "31", "name": "Bubinga", "scientific": "Guibourtia spp. demeusei", "origin": "West Africa", "availability": "Usually in stock", "applications": ["Furniture", "Turnery"], "price": "F", "category": "imported"}, {"id": "32", "name": "Padauk", "scientific": "Pterocarpus soyauxii", "origin": "West Africa", "availability": "Usually in stock", "applications": ["Furniture", "Musical Instruments", "Turnery"], "price": "E", "category": "imported"}, {"id": "33", "name": "Rock Maple", "scientific": "Acer spp.", "origin": "USA/Canada", "availability": "Usually in stock", "applications": ["Furniture", "Musical Instruments", "Turnery", "Flooring"], "price": "C", "category": "imported"}, {"id": "35", "name": "Kempas", "scientific": "Kompasia Malaccensis", "origin": "Malaysia", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Flooring"], "price": "A", "category": "imported"}, {"id": "36", "name": "Sapele", "scientific": "Entandrophragma cylindricum", "origin": "West Africa", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Boat Building"], "price": "C", "category": "imported"}, {"id": "37", "name": "African Mahogany", "scientific": "Khaya ivorensis", "origin": "West Africa", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Carvery", "Boat Building"], "price": "C", "category": "imported"}, {"id": "38", "name": "Amoora", "scientific": "Amoora cucullata", "origin": "New Guinea", "availability": "Usually in stock", "applications": ["Furniture", "Turnery"], "price": "A", "category": "imported"}, {"id": "39", "name": "Brazilwood", "scientific": "Guilandina echinata", "origin": "Brazil", "availability": "Available on request", "applications": ["Furniture", "Musical Instruments", "Turnery"], "price": "E", "category": "imported", "protected": true}, {"id": "40", "name": "Purple Heart", "scientific": "Peltogyne spp.", "origin": "Brazil", "availability": "Usually in stock", "applications": ["Furniture", "Musical Instruments", "Turnery", "Flooring"], "price": "E", "category": "imported"}, {"id": "42", "name": "Jelutong", "scientific": "Dyera costulata", "origin": "SE Asia", "availability": "Usually in stock", "applications": ["Turnery", "Carvery", "Boat Building"], "price": "A", "category": "imported"}, {"id": "45", "name": "Rengas", "scientific": "Gluta spp.", "origin": "SE Asia", "availability": "Usually in stock", "applications": ["Furniture", "Flooring"], "price": "B", "category": "imported"}, {"id": "46", "name": "Baltic Pine (Red)", "scientific": "Pinus sylvestris", "origin": "Scandinavia", "availability": "Usually in stock", "applications": ["Furniture", "Flooring"], "price": "C", "category": "imported"}, {"id": "48", "name": "American Cherry", "scientific": "Prunus serotina", "origin": "USA", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Carvery"], "price": "D", "category": "imported"}, {"id": "49", "name": "Rio Rosewood", "scientific": "Dalbergia nigra", "origin": "Brazil", "availability": "Usually in stock", "applications": ["Furniture", "Musical Instruments", "Turnery", "Carvery"], "price": "G", "category": "imported", "protected": true}, {"id": "50", "name": "Birds Eye Maple", "scientific": "Acer spp.", "origin": "USA Canada", "availability": "Usually in stock", "applications": ["Furniture", "Musical Instruments", "Turnery"], "price": "E", "category": "imported"}, {"id": "51", "name": "Zebrano", "scientific": "Brachystegia fleuryana", "origin": "West Africa", "availability": "Usually in stock", "applications": ["Furniture", "Turnery"], "price": "F", "category": "imported"}, {"id": "52", "name": "American Red Oak", "scientific": "Quercus rubra etc", "origin": "USA", "availability": "Available on request", "applications": ["Furniture", "Turnery", "Flooring"], "price": "C", "category": "imported"}, {"id": "53", "name": "European Beech", "scientific": "Fagus sylvatica", "origin": "Europe", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Carvery"], "price": "D", "category": "imported"}, {"id": "55", "name": "Canada Pine (Hemlock)", "scientific": "Tsuga heterophylla", "origin": "Canada/USA", "availability": "Available on request", "applications": ["Furniture", "Turnery"], "price": "A", "category": "imported"}, {"id": "56", "name": "Californian Redwood", "scientific": "Sequoia sempeuirens", "origin": "USA", "availability": "Available on request", "applications": ["Furniture", "Turnery"], "price": "C", "category": "imported"}, {"id": "57", "name": "Western Red Cedar", "scientific": "Thuja plicata", "origin": "Canada/USA", "availability": "Available on request", "applications": ["Furniture", "Musical Instruments", "Turnery", "Boat Building"], "price": "B", "category": "imported"}, {"id": "58", "name": "Radiata Pine", "scientific": "Pinus radiata", "origin": "Califomia/Chile/NZ/Aust/Canada", "availability": "Available on request", "applications": ["Furniture", "Turnery", "Flooring"], "price": "A", "category": "imported"}, {"id": "59", "name": "Douglas Fr (Oregon)", "scientific": "Pseudotsuga menzresii", "origin": "Canada/USA/NewZealand", "availability": "Available on request", "applications": ["Furniture", "Boat Building"], "price": "A", "category": "imported"}, {"id": "60", "name": "Anegre", "scientific": "Aningeria altissma", "origin": "West Africa", "availability": "Usually in stock", "applications": ["Furniture", "Turnery"], "price": "C", "category": "imported"}, {"id": "62", "name": "Silver Beech", "scientific": "Nothofagus menziesii", "origin": "New Zealand", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Flooring"], "price": "A", "category": "imported"}, {"id": "64", "name": "Rimu", "scientific": "Dacrydium cupressinum", "origin": "New Zealand", "availability": "Available on request", "applications": ["Furniture", "Turnery", "Flooring"], "price": "A", "category": "imported"}, {"id": "65", "name": "Koto (African Ash)", "scientific": "Pterygota bequaertii", "origin": "West Africa", "availability": "Available on request", "applications": ["Furniture", "Turnery"], "price": "C", "category": "imported"}, {"id": "66", "name": "Merrango", "scientific": "Azadirachta entegrifoliola", "origin": "Philippines", "availability": "Available on request", "applications": ["Furniture", "Turnery"], "price": "C", "category": "imported"}, {"id": "68", "name": "Taun", "scientific": "Pometia spp.", "origin": "New Guinea", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Flooring"], "price": "A", "category": "imported"}, {"id": "70", "name": "Kedondong", "scientific": "Canarium spp.", "origin": "Malaysia", "availability": "Available on request", "applications": ["Furniture", "Turnery"], "price": "B", "category": "imported"}, {"id": "71", "name": "Vitex", "scientific": "Vitex cofassus", "origin": "New Guinea", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Boat Building", "Flooring"], "price": "A", "category": "imported"}, {"id": "72", "name": "Indian Rosewood", "scientific": "Dalbergia latifolia", "origin": "India", "availability": "Usually in stock", "applications": ["Furniture", "Musical Instruments", "Turnery"], "price": "G", "category": "imported", "protected": true}, {"id": "73", "name": "Ebony Black", "scientific": "Diospyros ebenum", "origin": "India/Sri Lanka", "availability": "Usually in stock", "applications": ["Furniture", "Musical Instruments", "Turnery", "Carvery"], "price": "G", "category": "imported", "protected": true}, {"id": "74", "name": "European Walnut", "scientific": "Juglans regia", "origin": "Europe", "availability": "Available on request", "applications": ["Furniture", "Turnery"], "price": "F", "category": "imported"}, {"id": "75", "name": "Chilian Myrtle (Rauli)", "scientific": "Nothofagus procera", "origin": "Chile", "availability": "Usually in stock", "applications": ["Furniture", "Turnery", "Carvery"], "price": "E", "category": "imported"}, {"id": "76", "name": "Kaudamu", "scientific": "Myristica", "origin": "Fiji", "availability": "Available on request", "applications": ["Furniture", "Turnery"], "price": "B", "category": "imported"}, {"id": "77", "name": "Makore", "scientific": "Tieghemella heckelii", "origin": "West Africa", "availability": "Usually in stock", "applications": ["Furniture", "Turnery"], "price": "C", "category": "imported"}, {"id": "78", "name": "Kapur", "scientific": "Dryobalanops aromatica", "origin": "Malaysia Indonesia", "availability": "Available on request", "applications": ["Furniture", "Turnery", "Boat Building"], "price": "B", "category": "imported"}, {"id": "79", "name": "Obeche", "scientific": "Triplochiton scleroxylon", "origin": "West Africa", "availability": "Usually in stock", "applications": ["Furniture"], "price": "B", "category": "imported"}, {"id": "80", "name": "Macrocarpa", "scientific": "Macrocarpa", "origin": "Nth. America", "availability": "Usually in stock", "applications": ["Furniture", "Boat Building"], "price": "A", "category": "imported"}, {"id": "81", "name": "English Lime", "scientific": "Tilia vulgaris", "origin": "England Europe", "availability": "Usually in stock", "applications": ["Furniture", "Musical Instruments", "Turnery", "Carvery"], "price": "F", "category": "imported"}], "filters": {"applications": ["Furniture", "Musical Instruments", "Turnery", "Carvery", "Boat Building", "Flooring"], "availability": ["Usually in stock", "Available on request"], "prices": ["A", "B", "C", "D", "E", "F", "G"], "categories": ["Australian", "Imported"]}, "priceDescriptions": {"A": "Most affordable", "B": "Budget-friendly", "C": "Moderate pricing", "D": "Premium", "E": "High-end", "F": "Luxury", "G": "Ultra-premium/Specialty"}};
        
        // Generate unique origins from the species data
        const allOrigins = [...new Set(this.speciesData.species.map(s => s.origin))].sort();
        this.speciesData.filters.origins = allOrigins;
        
        this.filteredSpecies = [...this.speciesData.species];
        this.activeFilters = {
            category: [],
            availability: [],
            applications: [],
            price: [],
            origin: []
        };
        this.searchTerm = '';
        this.currentSort = 'name';
        this.sortDirection = 'asc'; // 'asc' or 'desc'
        
        this.init();
    }

    init() {
        // Wait for DOM to be ready, then initialize
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupEventListeners();
                this.initializeFilters();
                this.renderSpecies();
                this.updateStats();
                this.updateSortDirectionButtons();
            });
        } else {
            this.setupEventListeners();
            this.initializeFilters();
            this.renderSpecies();
            this.updateStats();
            this.updateSortDirectionButtons();
        }
    }

    setupEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        const clearSearch = document.getElementById('clearSearch');
        
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchTerm = e.target.value.toLowerCase().trim();
                this.applyFilters();
                this.toggleClearSearchButton();
            });
        }
        
        if (clearSearch) {
            clearSearch.addEventListener('click', () => {
                if (searchInput) {
                    searchInput.value = '';
                }
                this.searchTerm = '';
                this.applyFilters();
                this.toggleClearSearchButton();
                if (searchInput) {
                    searchInput.focus();
                }
            });
        }

        // Filter sidebar
        const filterToggle = document.getElementById('filterToggle');
        const closeSidebar = document.getElementById('closeSidebar');
        const filterSidebar = document.getElementById('filterSidebar');
        
        if (filterToggle && filterSidebar) {
            filterToggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                filterSidebar.classList.remove('hidden');
            });
        }
        
        if (closeSidebar && filterSidebar) {
            closeSidebar.addEventListener('click', () => {
                filterSidebar.classList.add('hidden');
            });
        }
        
        // Click outside to close sidebar
        document.addEventListener('click', (e) => {
            if (filterSidebar && !filterSidebar.contains(e.target) && 
                filterToggle && !filterToggle.contains(e.target)) {
                filterSidebar.classList.add('hidden');
            }
        });

        // Clear filters
        const clearAllFilters = document.getElementById('clearAllFilters');
        const clearFiltersFromNoResults = document.getElementById('clearFiltersFromNoResults');
        
        if (clearAllFilters) {
            clearAllFilters.addEventListener('click', () => this.clearAllFilters());
        }
        if (clearFiltersFromNoResults) {
            clearFiltersFromNoResults.addEventListener('click', () => this.clearAllFilters());
        }

        // Sort functionality
        const sortSelect = document.getElementById('sortSelect');
        const sortAsc = document.getElementById('sortAsc');
        const sortDesc = document.getElementById('sortDesc');
        
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                this.currentSort = e.target.value;
                this.applyFilters();
            });
        }
        
        if (sortAsc) {
            sortAsc.addEventListener('click', (e) => {
                e.preventDefault();
                this.setSortDirection('asc');
            });
        }
        
        if (sortDesc) {
            sortDesc.addEventListener('click', (e) => {
                e.preventDefault();
                this.setSortDirection('desc');
            });
        }

        // Modal functionality
        const modal = document.getElementById('speciesModal');
        const closeModal = document.getElementById('closeModal');
        
        if (closeModal) {
            closeModal.addEventListener('click', () => this.closeModal());
        }
        
        if (modal) {
            const modalBackdrop = modal.querySelector('.modal__backdrop');
            if (modalBackdrop) {
                modalBackdrop.addEventListener('click', () => this.closeModal());
            }
        }
        
        // ESC key to close modal and sidebar
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
                const filterSidebar = document.getElementById('filterSidebar');
                if (filterSidebar) {
                    filterSidebar.classList.add('hidden');
                }
            }
        });
    }

    setSortDirection(direction) {
        this.sortDirection = direction;
        this.updateSortDirectionButtons();
        this.applyFilters();
    }

    updateSortDirectionButtons() {
        const sortAsc = document.getElementById('sortAsc');
        const sortDesc = document.getElementById('sortDesc');
        
        if (sortAsc && sortDesc) {
            sortAsc.classList.toggle('active', this.sortDirection === 'asc');
            sortDesc.classList.toggle('active', this.sortDirection === 'desc');
        }
    }

    initializeFilters() {
        this.createFilterOptions('categoryFilters', this.speciesData.filters.categories, 'category');
        this.createFilterOptions('availabilityFilters', this.speciesData.filters.availability, 'availability');
        this.createFilterOptions('applicationFilters', this.speciesData.filters.applications, 'applications');
        this.createPriceFilterOptions();
        this.createFilterOptions('originFilters', this.speciesData.filters.origins, 'origin');
    }

    createFilterOptions(containerId, options, filterType) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = '';
        
        options.forEach(option => {
            const filterOption = document.createElement('div');
            filterOption.className = 'filter-option';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `${filterType}-${option.replace(/[^a-zA-Z0-9]/g, '_')}`;
            checkbox.value = option;
            
            const label = document.createElement('label');
            label.htmlFor = checkbox.id;
            label.textContent = option;
            
            checkbox.addEventListener('change', (e) => {
                this.updateFilter(filterType, option, e.target.checked);
            });
            
            filterOption.appendChild(checkbox);
            filterOption.appendChild(label);
            container.appendChild(filterOption);
        });
    }

    createPriceFilterOptions() {
        const container = document.getElementById('priceFilters');
        if (!container) return;
        
        container.innerHTML = '';
        
        this.speciesData.filters.prices.forEach(price => {
            const filterOption = document.createElement('div');
            filterOption.className = 'filter-option';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `price-${price}`;
            checkbox.value = price;
            
            const label = document.createElement('label');
            label.htmlFor = checkbox.id;
            label.textContent = `${price} - ${this.speciesData.priceDescriptions[price]}`;
            
            checkbox.addEventListener('change', (e) => {
                this.updateFilter('price', price, e.target.checked);
            });
            
            filterOption.appendChild(checkbox);
            filterOption.appendChild(label);
            container.appendChild(filterOption);
        });
    }

    updateFilter(filterType, value, isChecked) {
        if (isChecked) {
            if (!this.activeFilters[filterType].includes(value)) {
                this.activeFilters[filterType].push(value);
            }
        } else {
            this.activeFilters[filterType] = this.activeFilters[filterType].filter(item => item !== value);
        }
        
        this.applyFilters();
        this.updateActiveFiltersDisplay();
    }

    applyFilters() {
        let filtered = [...this.speciesData.species];
        
        // Apply search filter
        if (this.searchTerm) {
            filtered = filtered.filter(species => 
                species.name.toLowerCase().includes(this.searchTerm) ||
                species.scientific.toLowerCase().includes(this.searchTerm) ||
                species.origin.toLowerCase().includes(this.searchTerm)
            );
        }
        
        // Apply category filter
        if (this.activeFilters.category.length > 0) {
            filtered = filtered.filter(species => 
                this.activeFilters.category.includes(species.category === 'australian' ? 'Australian' : 'Imported')
            );
        }
        
        // Apply availability filter
        if (this.activeFilters.availability.length > 0) {
            filtered = filtered.filter(species => 
                this.activeFilters.availability.includes(species.availability)
            );
        }
        
        // Apply applications filter (species must have at least one of the selected applications)
        if (this.activeFilters.applications.length > 0) {
            filtered = filtered.filter(species => 
                species.applications.some(app => this.activeFilters.applications.includes(app))
            );
        }
        
        // Apply price filter
        if (this.activeFilters.price.length > 0) {
            filtered = filtered.filter(species => 
                this.activeFilters.price.includes(species.price)
            );
        }
        
        // Apply origin filter
        if (this.activeFilters.origin.length > 0) {
            filtered = filtered.filter(species => 
                this.activeFilters.origin.includes(species.origin)
            );
        }
        
        // Apply sorting
        this.sortSpecies(filtered);
        
        this.filteredSpecies = filtered;
        this.renderSpecies();
        this.updateStats();
    }

    sortSpecies(species) {
        const direction = this.sortDirection === 'asc' ? 1 : -1;
        
        species.sort((a, b) => {
            let result = 0;
            
            switch (this.currentSort) {
                case 'name':
                    result = a.name.localeCompare(b.name);
                    break;
                case 'price':
                    // A is cheapest (1), G is most expensive (7)
                    const priceOrder = { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7 };
                    result = (priceOrder[a.price] || 0) - (priceOrder[b.price] || 0);
                    break;
                case 'availability':
                    // "Usually in stock" comes first (better availability)
                    if (a.availability === b.availability) {
                        result = a.name.localeCompare(b.name);
                    } else {
                        result = a.availability === 'Usually in stock' ? -1 : 1;
                    }
                    break;
                case 'category':
                    if (a.category === b.category) {
                        result = a.name.localeCompare(b.name);
                    } else {
                        result = a.category.localeCompare(b.category);
                    }
                    break;
                default:
                    result = a.name.localeCompare(b.name);
            }
            
            return result * direction;
        });
    }

    renderSpecies() {
        const grid = document.getElementById('speciesGrid');
        const noResults = document.getElementById('noResults');
        
        if (!grid || !noResults) return;
        
        if (this.filteredSpecies.length === 0) {
            grid.classList.add('hidden');
            noResults.classList.remove('hidden');
            return;
        }
        
        grid.classList.remove('hidden');
        noResults.classList.add('hidden');
        
        grid.innerHTML = this.filteredSpecies.map(species => this.createSpeciesCard(species)).join('');
        
        // Add click listeners to cards
        grid.querySelectorAll('.species-card').forEach(card => {
            card.addEventListener('click', () => {
                const speciesId = card.dataset.speciesId;
                const species = this.speciesData.species.find(s => s.id === speciesId);
                if (species) {
                    this.openModal(species);
                }
            });
        });
    }

    createSpeciesCard(species) {
        const availabilityClass = species.availability === 'Usually in stock' ? 'stock' : 'request';
        const protectedBadge = species.protected ? '<span class="badge badge--protected">CITES Protected</span>' : '';
        
        return `
            <div class="species-card" data-species-id="${species.id}">
                <div class="species-card__header">
                    <h3 class="species-card__name">${species.name}</h3>
                    <div class="species-card__scientific">${species.scientific}</div>
                    ${species.category === 'imported' ? `<div class="species-card__origin">${species.origin}</div>` : ''}
                </div>
                
                <div class="species-card__badges">
                    <span class="badge badge--availability-${availabilityClass}">${species.availability}</span>
                    <span class="badge badge--price">Price ${species.price} - ${this.speciesData.priceDescriptions[species.price]}</span>
                    ${protectedBadge}
                </div>
                
                <div class="species-card__applications">
                    ${species.applications.map(app => `<span class="application-tag">${app}</span>`).join('')}
                </div>
            </div>
        `;
    }

    openModal(species) {
        const modal = document.getElementById('speciesModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');
        
        if (!modal || !modalTitle || !modalBody) return;
        
        modalTitle.textContent = species.name;
        
        const protectedInfo = species.protected ? 
            '<div class="modal-detail-group"><div class="modal-detail-label">CITES Protection</div><div class="modal-detail-value" style="color: var(--color-error);">This species is protected under CITES regulations</div></div>' : '';
        
        modalBody.innerHTML = `
            <div class="modal-detail-group">
                <div class="modal-detail-label">Scientific Name</div>
                <div class="modal-detail-value">${species.scientific}</div>
            </div>
            
            <div class="modal-detail-group">
                <div class="modal-detail-label">Origin</div>
                <div class="modal-detail-value">${species.origin}</div>
            </div>
            
            <div class="modal-detail-group">
                <div class="modal-detail-label">Category</div>
                <div class="modal-detail-value">${species.category === 'australian' ? 'Australian' : 'Imported'}</div>
            </div>
            
            <div class="modal-detail-group">
                <div class="modal-detail-label">Availability</div>
                <div class="modal-detail-value">${species.availability}</div>
            </div>
            
            <div class="modal-detail-group">
                <div class="modal-detail-label">Price Category</div>
                <div class="modal-detail-value">${species.price} - ${this.speciesData.priceDescriptions[species.price]}</div>
            </div>
            
            <div class="modal-detail-group">
                <div class="modal-detail-label">Applications</div>
                <div class="modal-detail-value">${species.applications.join(', ')}</div>
            </div>
            
            ${protectedInfo}
        `;
        
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        const modal = document.getElementById('speciesModal');
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }

    updateActiveFiltersDisplay() {
        const activeFiltersContainer = document.getElementById('activeFilters');
        const activeFiltersList = document.getElementById('activeFiltersList');
        
        if (!activeFiltersContainer || !activeFiltersList) return;
        
        const allActiveFilters = [];
        
        Object.keys(this.activeFilters).forEach(filterType => {
            this.activeFilters[filterType].forEach(value => {
                allActiveFilters.push({ type: filterType, value });
            });
        });
        
        if (allActiveFilters.length === 0) {
            activeFiltersContainer.classList.add('hidden');
            return;
        }
        
        activeFiltersContainer.classList.remove('hidden');
        activeFiltersList.innerHTML = allActiveFilters.map(filter => 
            `<div class="filter-pill">
                ${filter.value}
                <button onclick="window.catalog.removeFilter('${filter.type}', '${filter.value.replace(/'/g, "\\'")}');" aria-label="Remove filter">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>`
        ).join('');
    }

    removeFilter(filterType, value) {
        this.activeFilters[filterType] = this.activeFilters[filterType].filter(item => item !== value);
        
        // Update checkbox state
        const checkbox = document.getElementById(`${filterType}-${value.replace(/[^a-zA-Z0-9]/g, '_')}`);
        if (checkbox) checkbox.checked = false;
        
        this.applyFilters();
        this.updateActiveFiltersDisplay();
    }

    clearAllFilters() {
        // Reset all active filters
        Object.keys(this.activeFilters).forEach(key => {
            this.activeFilters[key] = [];
        });
        
        // Uncheck all checkboxes
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = false;
        });
        
        // Clear search
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = '';
        }
        this.searchTerm = '';
        
        this.applyFilters();
        this.updateActiveFiltersDisplay();
        this.toggleClearSearchButton();
        
        // Close sidebar on mobile
        const filterSidebar = document.getElementById('filterSidebar');
        if (filterSidebar) {
            filterSidebar.classList.add('hidden');
        }
    }

    toggleClearSearchButton() {
        const clearButton = document.getElementById('clearSearch');
        if (clearButton) {
            if (this.searchTerm) {
                clearButton.classList.remove('hidden');
            } else {
                clearButton.classList.add('hidden');
            }
        }
    }

    updateStats() {
        const resultsCount = document.getElementById('resultsCount');
        const totalCount = document.getElementById('totalCount');
        
        if (resultsCount) {
            resultsCount.textContent = this.filteredSpecies.length;
        }
        if (totalCount) {
            totalCount.textContent = this.speciesData.species.length;
        }
    }
}

// Initialize application when DOM is ready
let catalog;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        catalog = new WoodSpeciesCatalog();
        window.catalog = catalog;
    });
} else {
    catalog = new WoodSpeciesCatalog();
    window.catalog = catalog;
}