# Localisation, distribution et hébergement des modèles

Contrôle : **12 août 2026**. Cette vue indique où un modèle peut être obtenu ou exécuté. Elle distingue le développeur du modèle, son distributeur et l’hébergeur effectif. Une disponibilité commerciale depuis la Belgique ne garantit ni l’exécution ni le stockage dans l’Union européenne.

## Lecture rapide

- **API directe** : le fournisseur du modèle contrôle généralement l’inférence ; la région exacte dépend du produit et du contrat.
- **Cloud partenaire** : AWS, Azure ou Google Cloud distribuent le modèle, mais le lieu réel d’exécution doit être vérifié modèle par modèle.
- **Self-host** : l’exploitant choisit la région, sous réserve de la licence, des dépendances et des services externes utilisés.
- **À confirmer** : aucune preuve assez précise n’a été trouvée pour affirmer une résidence ou une disponibilité belge.

## Matrice vérifiée

| Développeur | Offre ou modèle | Distributeur / hébergeur | Canal | Région possible | Belgique | Point de vigilance | Confiance | Source |
|---|---|---|---|---|---|---|---:|---|
| OpenAI | Familles GPT via API directe | OpenAI | API managée | EEE pour services et clients éligibles | Selon le service | Vérifier inférence et stockage endpoint par endpoint | 95/100 | [R01](https://platform.openai.com/docs/) |
| Anthropic | Familles Claude via API directe | Anthropic | API managée | Option de résidence selon l’offre | Sous conditions | Vérifier le contrat et la surface utilisée | 92/100 | [R02](https://platform.claude.com/docs/) |
| Anthropic | Claude via Amazon Bedrock | AWS | Cloud partenaire | Régions AWS UE selon le modèle | Accessible | Contrôler routage interrégional et journaux | 92/100 | [R06](https://docs.aws.amazon.com/bedrock/) |
| Anthropic | Claude via Microsoft Foundry | Microsoft / infrastructure Anthropic | Cloud partenaire | Ne suit pas automatiquement la région Azure choisie | Selon le catalogue | Confirmer le lieu réel d’exécution | 90/100 | [R05](https://learn.microsoft.com/azure/ai-foundry/) |
| Google | Gemini API | Google AI Studio | API managée | Service disponible dans l’EEE | Disponible | Disponibilité EEE ≠ résidence garantie | 95/100 | [R03](https://ai.google.dev/gemini-api/docs/) |
| Google | Gemini via Vertex AI | Google Cloud | Cloud partenaire | Régions et multirégions UE selon le modèle | Selon le projet | Gouvernance par configuration Cloud | 95/100 | [R04](https://cloud.google.com/vertex-ai/generative-ai/docs/) |
| OpenAI | Modèles OpenAI via Azure | Microsoft Azure | Cloud partenaire | Régions Azure UE selon le modèle | Selon l’abonnement | Vérifier région et fonctions annexes | 95/100 | [R05](https://learn.microsoft.com/azure/ai-foundry/) |
| Multiples | Catalogue Amazon Bedrock | AWS | Cloud partenaire | Régions AWS UE, disponibilité variable | Disponible | Vérifier chaque modèle, outil et routage | 95/100 | [R06](https://docs.aws.amazon.com/bedrock/) |
| Mistral AI | Modèles Mistral | Mistral AI | API managée / privé | Options européennes selon l’offre | Disponible | Vérifier région exacte et rétention | 92/100 | [R07](https://docs.mistral.ai/) |
| Multiples | Inference Endpoints | Hugging Face / AWS | Cloud partenaire | AWS `eu-west-1` documenté | Disponible | Vérifier DPA et configuration de l’endpoint | 90/100 | [R08](https://huggingface.co/docs/) |
| Meta, Mistral, Qwen, NVIDIA, IBM et autres | Modèles à poids ouverts | Dépôts officiels / exploitant | Self-host | Région choisie par l’exploitant | Selon licence et accès | Logs, sauvegardes et dépendances restent à gouverner | 95/100 | Sources officielles propres à chaque modèle |
| Cohere | Command, Embed et Rerank | Cohere et clouds partenaires | API / cloud partenaire | À confirmer par offre et contrat | B2B à vérifier | Résidence insuffisamment précise | 70/100 | [R13](https://docs.cohere.com/) |
| DeepSeek, Qwen, Kimi et GLM | API directes | Fournisseurs directs | API managée | Région UE non confirmée | À confirmer | DPA, transferts et rétention à documenter | 60/100 | Documentation de chaque fournisseur |

## Règle de décision

Avant une mise en production, conserver une preuve datée pour le **modèle précis**, la **région du endpoint**, les **journaux**, le **stockage**, les **sous-traitants** et les fonctions annexes comme la recherche web ou les outils. Cette analyse est informative et ne constitue pas un avis juridique.
