# Localisation, distribution et hébergement des modèles

Contrôle : **14 août 2026**. Cette vue indique où un modèle peut être obtenu ou exécuté. Elle distingue le développeur du modèle, son distributeur et l’hébergeur effectif. Une disponibilité commerciale depuis la Belgique ne garantit ni l’exécution ni le stockage dans l’Union européenne.

## Lecture rapide

- **API directe** : le fournisseur du modèle contrôle généralement l’inférence ; la région exacte dépend du produit et du contrat.
- **Cloud partenaire** : AWS, Azure ou Google Cloud distribuent le modèle, mais le lieu réel d’exécution doit être vérifié modèle par modèle.
- **Self-host** : l’exploitant choisit la région, sous réserve de la licence, des dépendances et des services externes utilisés.
- **À confirmer** : aucune preuve assez précise n’a été trouvée pour affirmer une résidence ou une disponibilité belge.

## Matrice vérifiée

| Développeur | Offre ou modèle | Distributeur / hébergeur | Canal | Région possible | Belgique | Point de vigilance | Confiance | Source |
|---|---|---|---|---|---|---|---:|---|
| OpenAI | Familles GPT via API directe | OpenAI | API managée | EEE pour services et clients éligibles | Selon le service | Vérifier inférence et stockage endpoint par endpoint | 95/100 | [R01](https://platform.openai.com/docs/) |
| Anthropic | Familles Claude via API directe | Anthropic | API managée | Global par défaut ; inférence US épinglable via `inference_geo` (×1,1). **Aucune résidence UE publiée pour l’API directe** | Sous conditions | Pour une exigence de résidence UE, passer par Bedrock ou Google Cloud en région UE | 95/100 | [R02](https://platform.claude.com/docs/) |
| Anthropic | Claude via Amazon Bedrock | AWS | Cloud partenaire | Régions AWS UE selon le modèle | Accessible | Contrôler routage interrégional et journaux | 92/100 | [R06](https://docs.aws.amazon.com/bedrock/) |
| Anthropic | Claude via Microsoft Foundry | Microsoft / infrastructure Anthropic | Cloud partenaire | Ne suit pas automatiquement la région Azure choisie | Selon le catalogue | Confirmer le lieu réel d’exécution | 90/100 | [R05](https://learn.microsoft.com/azure/ai-foundry/) |
| Google | Gemini API | Google AI Studio | API managée | Service disponible dans l’EEE | Disponible | Disponibilité EEE ≠ résidence garantie | 95/100 | [R03](https://ai.google.dev/gemini-api/docs/) |
| Google | Gemini via Vertex AI | Google Cloud | Cloud partenaire | Régions et multirégions UE selon le modèle | Selon le projet | Gouvernance par configuration Cloud | 95/100 | [R04](https://cloud.google.com/vertex-ai/generative-ai/docs/) |
| OpenAI | Modèles OpenAI via Azure | Microsoft Azure | Cloud partenaire | Régions Azure UE selon le modèle | Selon l’abonnement | Vérifier région et fonctions annexes | 95/100 | [R05](https://learn.microsoft.com/azure/ai-foundry/) |
| Multiples | Catalogue Amazon Bedrock | AWS | Cloud partenaire | Régions AWS UE, disponibilité variable | Disponible | Vérifier chaque modèle, outil et routage | 95/100 | [R06](https://docs.aws.amazon.com/bedrock/) |
| Mistral AI | Modèles ouverts tiers hébergés par Mistral (à partir de GLM-5.2 de Z.ai) | Mistral AI (hébergeur) / Z.ai (développeur) | API managée | Derrière les mêmes Regional Endpoints : exécution au choix en Europe ou aux États-Unis | Disponible | ⚠️ **Ne pas confondre hébergeur et éditeur.** L’exécution européenne ne dit rien de la licence du modèle ni des conditions de son développeur : à vérifier modèle par modèle | 85/100 | [S162–S163](sources.md) |
| Mistral AI | Modèles Mistral | Mistral AI | API managée / privé | **Regional Endpoints en GA depuis le 11/08/2026 : exécution au choix en Europe ou aux États-Unis, à ×1,1 le tarif global. Priority Tier en préversion (×1,75) avec SLA 99,5 %** | Disponible | ⚠️ **Des transferts encadrés et limités vers des sous-traitants hors région restent possibles** : un endpoint UE n’exclut pas tout transfert. Exiger le DPA et la liste nominative des sous-traitants ; SLA en préversion à confirmer contractuellement | 92/100 | [R07](https://docs.mistral.ai/), [S142–S144](sources.md) |
| xAI (SpaceXAI) | Grok 4.6 | xAI | API managée | **Aucune résidence UE annoncée ; DPA documentant un traitement en `us-east-1` et `us-west-2`** | Grok 4.5 confirmé dans la console UE depuis le 17/07 ; **statut de 4.6 à confirmer** | Ne pas y traiter de données personnelles européennes tant que résidence et DPA ne sont pas établis. **Entité contractante susceptible de changer** à la clôture de l’acquisition d’Anysphere par SpaceX (attendue fin août 2026) | À confirmer | [S68, S139–S141, S147](sources.md) |
| Multiples | Inference Endpoints | Hugging Face / AWS | Cloud partenaire | AWS `eu-west-1` documenté | Disponible | Vérifier DPA et configuration de l’endpoint | 90/100 | [R08](https://huggingface.co/docs/) |
| Meta, Mistral, Qwen, NVIDIA, IBM et autres | Modèles à poids ouverts | Dépôts officiels / exploitant | Self-host | Région choisie par l’exploitant | Selon licence et accès | Logs, sauvegardes et dépendances restent à gouverner | 95/100 | Sources officielles propres à chaque modèle |
| Cohere | Command, Embed et Rerank | Cohere et clouds partenaires | API / cloud partenaire | À confirmer par offre et contrat | B2B à vérifier | Résidence insuffisamment précise | 70/100 | [R13](https://docs.cohere.com/) |
| DeepSeek, Qwen, Kimi et GLM | API directes | Fournisseurs directs | API managée | Région UE non confirmée | À confirmer | DPA, transferts et rétention à documenter | 60/100 | Documentation de chaque fournisseur |

## État de vérification au 14 août 2026

**Une ligne a été revérifiée sur documentation primaire ouverte directement.** Pour l’API directe Anthropic, la documentation officielle établit que le routage est **global par défaut** et qu’une **inférence limitée aux États-Unis** est disponible via le paramètre `inference_geo`, facturée avec un multiplicateur de 1,1×. Aucune option de résidence **européenne** n’est publiée pour l’API directe : une exigence de résidence UE sur Claude passe donc par AWS Bedrock ou Google Cloud en région UE, et non par l’API de premier rang. Point de vigilance déjà documenté et inchangé : dans Microsoft Foundry, les modèles Anthropic s’exécutent sur l’infrastructure d’Anthropic et **non dans la région Azure sélectionnée**.

Pour **Mistral**, la résidence européenne de l’inférence est désormais un produit facturé : `api.eu.mistral.ai` épingle l’exécution en Europe pour **1,1× le tarif standard**, établi par convergence de sources indépendantes à 88/100. Réserve inchangée : un endpoint UE ne signifie pas qu’aucune donnée ne quitte l’UE — la liste des sous-traitants doit être lue avant toute inscription dans un registre de traitement.

Toutes les autres lignes n’ont pas pu être revérifiées : les domaines fournisseurs concernés restent bloqués par la politique de sortie réseau. Elles conservent la confiance obtenue lors de leur dernière vérification effective et portent, dans `dashboard/data/latest.json`, un statut explicite « non revérifié ».

## Règle de décision

Avant une mise en production, conserver une preuve datée pour le **modèle précis**, la **région du endpoint**, les **journaux**, le **stockage**, les **sous-traitants** et les fonctions annexes comme la recherche web ou les outils. Cette analyse est informative et ne constitue pas un avis juridique.
